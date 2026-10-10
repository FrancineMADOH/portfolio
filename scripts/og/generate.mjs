// Images de partage (Open Graph, 1200 × 630) du portfolio (F8.2). Hors build.
//
// Usage (depuis francinemadoh/) : npm run og
// Sortie : public/images/og/<nom>.jpg — JPEG, format le mieux accepté par LinkedIn et les messageries.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer-core';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const publicDir = path.join(projectRoot, 'public');
const outDir = path.join(publicDir, 'images/og');
const asset = rel => pathToFileURL(path.join(publicDir, rel)).href;

/** Une image par page partageable. `visual` : capture affichée à droite (chemin depuis public/). */
const CARDS = [
  { name: 'default', eyebrow: 'Portfolio', title: 'Du diagnostic au déploiement', subtitle: 'Consultante en transformation digitale · Cheffe de projet · Business analyst · Consultante Odoo · Développeuse', visual: null },
  { name: 'christ-international-group', eyebrow: 'Étude de cas', title: 'Transformation digitale de Christ International Group', subtitle: 'Diagnostic, site multilingue et solution de gestion du fret en production', visual: 'images/projects/christ-international-group/accueil-desktop.webp' },
  { name: 'brightwill', eyebrow: 'Étude de cas', title: 'BrightWill : concevoir une offre et la mettre sur le marché', subtitle: 'Études de marché, positionnement, stratégie digitale et site bilingue', visual: 'images/projects/brightwill/accueil-desktop.webp' },
  { name: 'nomoresilent', eyebrow: 'Étude de cas', title: 'NoMoreSilent : signaler les violences en toute sécurité', subtitle: 'Plateforme anonyme avec assistant conversationnel IA', visual: 'images/projects/nomoresilent/accueil-desktop.webp' },
  { name: 'mungoum', eyebrow: 'Étude de cas', title: 'Mungoum : le calendrier Nguemba dans la poche', subtitle: 'Application Flutter publiée sur Google Play', visual: 'images/projects/mungoum/app-aujourdhui.webp', mobile: true }
];

const escape = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

function html(card) {
  const visual = card.visual
    ? `<div class="visual ${card.mobile ? 'visual--mobile' : ''}"><img src="${asset(card.visual)}"></div>`
    : `<img class="photo" src="${asset('images/profile.webp')}">`;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    @font-face { font-family: 'Fraunces'; src: url('${asset('fonts/fraunces-latin-wght.woff2')}') format('woff2'); font-weight: 100 900; }
    @font-face { font-family: 'Inter'; src: url('${asset('fonts/inter-latin-wght.woff2')}') format('woff2'); font-weight: 100 900; }
    * { box-sizing: border-box; margin: 0; }
    body { width: 1200px; height: 630px; display: flex; overflow: hidden; background: #14213D; color: #F3F1EC; font-family: 'Inter', sans-serif; }
    .text { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 22px; padding: 64px 56px 64px 72px; }
    .eyebrow { color: #E89A6B; font-size: 20px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; }
    h1 { font-family: 'Fraunces', serif; font-size: ${card.visual ? 52 : 68}px; font-weight: 600; line-height: 1.1; }
    .subtitle { color: #A9B3C4; font-size: 24px; line-height: 1.45; }
    .name { margin-top: 18px; padding-top: 22px; border-top: 2px solid #2A3756; font-family: 'Fraunces', serif; font-size: 24px; white-space: nowrap; font-weight: 600; }
    .name span { color: #E89A6B; }
    .visual { width: 470px; display: flex; align-items: center; padding-right: 56px; }
    .visual img { width: 100%; border-radius: 14px; box-shadow: 0 20px 50px rgba(0,0,0,.45); }
    .visual--mobile { justify-content: center; }
    .visual--mobile img { width: auto; height: 520px; border: 10px solid #1A1D24; border-radius: 34px; }
    .photo { align-self: center; width: 300px; height: 300px; margin-right: 96px; border: 6px solid #2A3756; border-radius: 50%; object-fit: cover; }
  </style></head><body>
    <div class="text">
      <p class="eyebrow">${escape(card.eyebrow)}</p>
      <h1>${escape(card.title)}</h1>
      <p class="subtitle">${escape(card.subtitle)}</p>
      <p class="name">Francine MADOH <span>·</span> portfolio.isfranny.net</p>
    </div>
    ${visual}
  </body></html>`;
}

const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args: ['--no-sandbox', '--allow-file-access-from-files'] });
try {
  fs.mkdirSync(outDir, { recursive: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  for (const card of CARDS) {
    const file = path.join(outDir, `${card.name}.jpg`);
    const tmp = path.join(outDir, `.${card.name}.html`);
    fs.writeFileSync(tmp, html(card));
    await page.goto(pathToFileURL(tmp).href, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: file, type: 'jpeg', quality: 86 });
    fs.unlinkSync(tmp);
    console.log(`✔ og/${card.name}.jpg (${Math.round(fs.statSync(file).size / 1024)} Ko)`);
  }
} finally {
  await browser.close();
}
