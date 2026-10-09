// src/app/pages/projects/projects.component.ts
import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FooterComponent } from '../../shared/footer/footer.component';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { finalize } from 'rxjs/operators';
import { ContactService } from '../../services/contact.service';
import { environment } from "../../../environements/environement";
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { RoleService } from '../../services/role.service';
import { DEFAULT_ROLE } from '../../content/roles';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FooterComponent, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})


export class ProjectsComponent implements OnInit {
  name = String(environment.name)
  title = String(environment.title)
  summary = String(environment.summary)
  githubUrl = environment.githubUrl;

  //Contact form
  contactSending = signal(false);
  contactSuccess = signal<string | null>(null);
  contactError   = signal<string | null>(null);


  // Section 2 (projets) – pas de données de démo, alimenté plus tard par une API
  projects = signal<Project[]>([]);
  loading = signal(false);
  errorMsg = signal<string | null>(null);

  categories = ['__all__', 'Fullstack + IA', 'Fullstack', 'Mobile', 'Odoo / Python'];
  selectedCategory = signal<string>('__all__');
  filteredProjects = computed(() =>
    this.selectedCategory() === '__all__'
      ? this.projects()
      : this.projects().filter(p => p.category === this.selectedCategory())
  );

  setFilter(cat: string): void {
    this.selectedCategory.set(cat);
  }


  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectsSvc: ProjectService,
    private contactSvc: ContactService,
    private translate: TranslateService,
    public langSvc: LanguageService,
    roleSvc: RoleService
  ) {
    // Ancien accueil (supprimé en phase 5) : `/` correspond à la lentille par défaut.
    roleSvc.setActive(DEFAULT_ROLE);
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }


  ngOnInit(): void {
    this.loadProjects();
  }


  loadProjects(): void {
    this.loading.set(true);
    this.errorMsg.set(null);

    this.projectsSvc.getAll().subscribe({
      next: (items) => {
        this.projects.set(items);
        this.loading.set(false);
      },
      error: (e) => {
        this.errorMsg.set(e?.message || 'Erreur lors du chargement des projets.');
        this.loading.set(false);
      }
    });
  }

  // trackBy pour *ngFor
  trackByProject(index: number, project: Project) {
    return project.id ?? project.title;
  }

  // Split technologies string into individual badge labels
  getTechList(technologies: string): string[] {
    return technologies ? technologies.split(' · ') : [];
  }

  get c() { return this.contactForm.controls; }

  getDescription(p: Project): string {
    return this.langSvc.currentLang() === 'en' && p.description_en
      ? p.description_en
      : p.description;
  }

  async submitContact() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    // reset messages + état "envoi"
    this.contactSuccess.set(null);
    this.contactError.set(null);
    this.contactSending.set(true);

    this.contactSvc.send(this.contactForm.value)
      .pipe(finalize(() => this.contactSending.set(false)))
      .subscribe({
        next: (res) => {
          this.contactSuccess.set(this.translate.instant('contact.success'));
          this.contactForm.reset();
        },
        error: (e) => {
          this.contactError.set(this.translate.instant('contact.error'));
        }
      });
  }

}
