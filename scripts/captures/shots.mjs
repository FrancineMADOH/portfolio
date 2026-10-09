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
//   waitFor    sélecteur CSS attendu avant la capture (applications qui se chargent en JavaScript)
//   blur       sélecteurs CSS floutés (données personnelles : noms, téléphones, e-mails)
//   session    connexion préalable, définie dans SESSIONS
//   click      sélecteurs CSS cliqués dans l'ordre avant la capture (retirer un filtre, ouvrir un onglet)
//   element    sélecteur CSS : capture de cet élément seul au lieu de l'écran
//   scale      densité de pixels (ex. 2 pour un petit élément net, comme une étiquette)

/**
 * Connexions aux applications locales. Base de test uniquement : les identifiants par défaut
 * sont ceux de la base de démonstration locale, à surcharger avec ODOO_LOGIN / ODOO_PASSWORD.
 */
export const SESSIONS = {
  bwfreight: {
    url: 'http://localhost:8070/web/login?db=bwfreight',
    login: process.env.ODOO_LOGIN || 'admin',
    password: process.env.ODOO_PASSWORD || 'admin'
  }
};

/** Éléments flottants et bandeaux des sites Odoo, masqués pour des captures propres. */
const ODOO_OVERLAYS = ['#website_cookies_bar', '.o_cookies_discrete', '.o_livechat_button', '[class*="whatsapp_float"]'];

/** Colonnes et champs de données personnelles du back-office BrightFret, floutés sur les captures. */
const BO_PERSONAL_DATA = ['[name="client_id"]', '[name="client_phone"]', '[name="supplier_id"]', '[name="partner_id"]', '[name="email"]', '[name="phone"]'];

/** Historique des fiches Odoo (base de test : activités en retard, échecs SMS sans Twilio), masqué : la fiche prend toute la largeur. */
const BO_CHATTER = ['.o-mail-Form-chatter', '.o-mail-ChatterContainer'];

/** Colonnes de l'onglet Suivi propres à la base de test : SMS toujours « Échoué » (pas de Twilio) et notes de test. */
const BO_TEST_COLUMNS = ['[data-name="sms_state"]', 'td[name="sms_state"]', '[data-name="note"]', 'td[name="note"]'];

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
  { slug: 'nomoresilent', name: 'signaler', url: 'https://nomoresilent.brightwill.org/signaler', viewports: ['desktop', 'mobile'], waitMs: 1500 },

  // F2.3 — Back-office BrightFret et PWA opérateurs (instance locale bwfreight, données de test).
  // Expédition 60 = client de test (sophie.nkoulou@example.com), 11 étapes de transit.
  // Pas de rapport de suivi : sans Twilio sur la base de test, toute sa colonne SMS affiche « Failed ».
  { slug: 'christ-international-group', name: 'bo-expeditions', session: 'bwfreight', url: 'http://localhost:8070/odoo/action-bw_freight_management.action_freight_shipment', viewports: ['desktop'], waitFor: '.o_list_renderer', waitMs: 800, click: ['.o_searchview_facet .o_facet_remove'], blur: BO_PERSONAL_DATA },
  { slug: 'christ-international-group', name: 'bo-expedition', session: 'bwfreight', url: 'http://localhost:8070/odoo/action-bw_freight_management.action_freight_shipment/60', viewports: ['desktop'], waitFor: '.o_form_view', waitMs: 800, hide: BO_CHATTER, blur: BO_PERSONAL_DATA },
  { slug: 'christ-international-group', name: 'bo-expedition-suivi', session: 'bwfreight', url: 'http://localhost:8070/odoo/action-bw_freight_management.action_freight_shipment/60', viewports: ['desktop'], waitFor: '.o_form_view', waitMs: 800, click: ['.o_notebook a[name="tracking"]'], scrollTo: '.o_notebook', hide: [...BO_CHATTER, ...BO_TEST_COLUMNS], blur: BO_PERSONAL_DATA },
  { slug: 'christ-international-group', name: 'bo-manifeste', session: 'bwfreight', url: 'http://localhost:8070/odoo/action-bw_freight_management.action_freight_manifest/1', viewports: ['desktop'], waitFor: '.o_form_view', waitMs: 800, hide: BO_CHATTER, blur: BO_PERSONAL_DATA },
  { slug: 'christ-international-group', name: 'bo-reclamation', session: 'bwfreight', url: 'http://localhost:8070/odoo/action-bw_freight_management.action_freight_claim/42', viewports: ['desktop'], waitFor: '.o_form_view', waitMs: 800, hide: BO_CHATTER, blur: BO_PERSONAL_DATA },
  { slug: 'christ-international-group', name: 'pwa-ops', session: 'bwfreight', url: 'http://localhost:8070/ops', viewports: ['mobile'], waitMs: 1500 },
  { slug: 'christ-international-group', name: 'pwa-ops-bordereaux', session: 'bwfreight', url: 'http://localhost:8070/ops', viewports: ['mobile'], waitMs: 1500, click: ['.ops-bottom-nav .ops-nav-btn:nth-of-type(2)'] },
  { slug: 'christ-international-group', name: 'rapport-etiquette', session: 'bwfreight', url: 'http://localhost:8070/report/html/bw_freight_management.report_freight_label_document/60', viewports: ['desktop'], waitMs: 500, element: '.bwl-page', scale: 2 }
];
