# Portfolio — Francine MADOH

Portfolio personnel de Francine MADOH, développeuse Fullstack TypeScript · Python · Odoo · Flutter.

Site en production : **[francinemadoh.isfranny.net](https://francinemadoh.isfranny.net)**

## Stack

- **Framework** : Angular 19 (standalone components, signals)
- **UI** : Bootstrap 5 (grid uniquement) + CSS custom properties (dark theme)
- **i18n** : ngx-translate v18 — bilingue FR / EN
- **Contact** : FormSubmit.co (aucun backend)
- **Données projets** : JSON statique (`public/data/projects.json`)
- **Déployé** : VPS Ubuntu + nginx + Let's Encrypt

## Lancer en local

```bash
npm install
ng serve
```

Ouvrir [http://localhost:4200](http://localhost:4200).

## Build production

```bash
ng build --configuration production
# output : dist/francinemadoh/browser/
```

## Structure

```
src/
├── app/
│   ├── pages/projects/      # Page principale (Hero, Skills, Projects, Contact)
│   ├── shared/navbar/       # Navbar + switcher FR/EN
│   ├── shared/footer/
│   ├── services/            # ProjectService, ContactService, LanguageService
│   └── models/
├── styles.css               # Design tokens CSS
public/
├── data/projects.json       # 6 projets
├── i18n/fr.json             # Traductions françaises
└── i18n/en.json             # Traductions anglaises
```
