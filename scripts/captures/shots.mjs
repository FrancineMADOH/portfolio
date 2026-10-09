// Liste des captures d'écran du portfolio (F2.1). Complétée en F2.2 (sites publics) et F2.3 (back-office).
//
// Champs d'une capture :
//   slug       dossier de sortie : public/images/projects/<slug>/
//   name       nom du fichier, sans extension ; le format est ajouté : <name>-desktop.webp / <name>-mobile.webp
//   url        page à capturer
//   viewports  formats à produire : 'desktop' (1440 × 900) et/ou 'mobile' (390 × 844)
//   fullPage   capture de toute la hauteur de la page (défaut : false, seulement l'écran visible)
//   hide       sélecteurs CSS masqués avant la capture (bannières de cookies, boutons flottants, pop-ups)
//   scrollTo   sélecteur CSS amené en haut de l'écran avant la capture
//   waitMs     attente supplémentaire après le chargement (animations, images différées)

/** Éléments flottants et bandeaux des sites Odoo, masqués pour des captures propres. */
const ODOO_OVERLAYS = ['#website_cookies_bar', '.o_cookies_discrete', '.o_livechat_button', '[class*="whatsapp_float"]'];

export const SHOTS = [
  // F2.2 — Christ International Group (christinternationalgroup.com). URL en /fr : sans préfixe, le site suit la langue du navigateur.
  { slug: 'christ-international-group', name: 'accueil', url: 'https://christinternationalgroup.com/fr', viewports: ['desktop', 'mobile'], hide: ODOO_OVERLAYS },
  { slug: 'christ-international-group', name: 'christ-cargo', url: 'https://christinternationalgroup.com/fr/christ-cargo', viewports: ['desktop', 'mobile'], hide: ODOO_OVERLAYS },
  { slug: 'christ-international-group', name: 'departs', url: 'https://christinternationalgroup.com/fr/departs', viewports: ['desktop', 'mobile'], hide: ODOO_OVERLAYS, scrollTo: '#departures-sea' },
  { slug: 'christ-international-group', name: 'agences', url: 'https://christinternationalgroup.com/fr/agences', viewports: ['desktop'], hide: ODOO_OVERLAYS },
  { slug: 'christ-international-group', name: 'accueil-chinois', url: 'https://christinternationalgroup.com/zh_CN', viewports: ['desktop'], hide: ODOO_OVERLAYS },

  // F2.2 — BrightWill (brightwill.org)
  { slug: 'brightwill', name: 'accueil', url: 'https://brightwill.org/fr', viewports: ['desktop', 'mobile'], hide: ODOO_OVERLAYS },
  { slug: 'brightwill', name: 'fret', url: 'https://brightwill.org/fr/fret', viewports: ['desktop', 'mobile'], hide: ODOO_OVERLAYS },
  { slug: 'brightwill', name: 'erp', url: 'https://brightwill.org/fr/erp', viewports: ['desktop'], hide: ODOO_OVERLAYS },

  // F2.2 — NoMoreSilent (nomoresilent.brightwill.org)
  { slug: 'nomoresilent', name: 'accueil', url: 'https://nomoresilent.brightwill.org/', viewports: ['desktop', 'mobile'], waitMs: 800 },
  { slug: 'nomoresilent', name: 'signaler', url: 'https://nomoresilent.brightwill.org/signaler', viewports: ['desktop', 'mobile'], waitMs: 1500 }
];
