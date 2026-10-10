# Portfolio — Francine MADOH

Portfolio de Francine MADOH : consultante en transformation digitale, cheffe de projet, analyste fonctionnelle, consultante Odoo et développeuse Angular · Node.js · Python/Odoo.

Site en ligne : **[portfolio.isfranny.net](https://portfolio.isfranny.net)**

## Stack

- **Framework** : Angular 19 (composants standalone, signaux), pré-rendu statique avec `@angular/ssr` (aucun serveur Node en production)
- **Design** : CSS custom properties, polices auto-hébergées, aucune ressource externe
- **i18n** : ngx-translate v18 pour l'interface, contenu typé bilingue `{ fr, en }` dans `src/app/content/`
- **Hébergement** : GitHub Pages, déployé par GitHub Actions à chaque push sur `main`

## Lancer en local

```bash
npm install
ng serve
```

Puis ouvrir l’adresse affichée par `ng serve`.

## Build de production

```bash
ng build --configuration production
# sortie : dist/francinemadoh/browser/ (pages pré-rendues)
```

## Outils

```bash
npm run captures   # captures d'écran des projets (scripts/captures/)
npm run og         # images de partage 1200 × 630 (scripts/og/)
```

Les captures du back-office lisent leurs identifiants dans l'environnement (`ODOO_URL`, `ODOO_DB`, `ODOO_LOGIN`, `ODOO_PASSWORD`) : aucun identifiant n'est stocké dans le dépôt.

## Structure

```
src/app/
├── content/        # Contenu bilingue : études de cas, rôles, parcours, compétences, IA, méthode
├── pages/          # Accueil (par rôle), étude de cas, méthode, 404
├── shared/         # Barre latérale, pied de page, cadre de téléphone, badge Google Play
└── services/       # Langue, rôle actif, SEO
src/i18n/           # Libellés de l'interface (fr, en)
public/             # Polices, images, CV, sitemap, robots, CNAME
```

## Déploiement

Automatique : `.github/workflows/deploy.yml` construit le site et le publie sur GitHub Pages à chaque push sur `main`. Le domaine personnalisé est déclaré dans `public/CNAME`.
