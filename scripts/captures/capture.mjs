// Script de capture d'écran du portfolio (F2.1). Hors build : n'est jamais livré avec le site.
//
// Usage (depuis francinemadoh/) :
//   npm run captures                     toutes les captures de shots.mjs
//   npm run captures -- --only brightwill   seulement les captures d'un projet
//
// Les captures du back-office (session « bwfreight ») demandent l'instance locale lancée :
// instance locale lancée. Variables : ODOO_URL, ODOO_DB, ODOO_LOGIN, ODOO_PASSWORD (jamais dans le dépôt).
//
// Chrome utilisé : CHROME_PATH, sinon /usr/bin/google-chrome. Les fichiers existants sont remplacés.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

import { SESSIONS, SHOTS } from './shots.mjs';

const VIEWPORTS = {
  desktop: { width: 1440, height: 900, deviceScaleFactor: 1 },
  mobile: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
};
const WEBP_QUALITY = 82;
const NAV_TIMEOUT_MS = 45_000;

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const outRoot = path.join(projectRoot, 'public/images/projects');

function parseArgs(argv) {
  const i = argv.indexOf('--only');
  return { only: i >= 0 ? argv[i + 1] : null };
}

/** Connexion à une application (ex. back-office Odoo) : les cookies servent ensuite à toutes les pages du navigateur. */
async function login(browser, sessionName) {
  const session = SESSIONS[sessionName];
  if (!session) {
    throw new Error(`Session « ${sessionName} » absente de SESSIONS dans shots.mjs.`);
  }
  if (!process.env.ODOO_URL || !session.login || !session.password) {
    throw new Error('Connexion incomplète : définir ODOO_URL, ODOO_LOGIN et ODOO_PASSWORD dans l’environnement.');
  }
  const page = await browser.newPage();
  try {
    await page.goto(session.url, { waitUntil: 'networkidle2', timeout: NAV_TIMEOUT_MS });
    await page.type('#login', session.login);
    await page.type('#password', session.password);
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle2', timeout: NAV_TIMEOUT_MS }),
      page.click('button[type="submit"]')
    ]);
    if (await page.$('#login')) {
      throw new Error(`Connexion refusée pour la session « ${sessionName} ».`);
    }
  } finally {
    await page.close();
  }
}

async function capture(browser, shot, viewportName) {
  const page = await browser.newPage();
  try {
    const viewport = VIEWPORTS[viewportName];
    await page.setViewport(shot.scale ? { ...viewport, deviceScaleFactor: shot.scale } : viewport);
    await page.goto(shot.url, { waitUntil: 'networkidle2', timeout: NAV_TIMEOUT_MS });
    await page.evaluate(() => document.fonts.ready);

    if (shot.waitFor) {
      await page.waitForSelector(shot.waitFor, { timeout: NAV_TIMEOUT_MS });
    }
    for (const selector of shot.click ?? []) {
      await page.click(selector);
      await new Promise(r => setTimeout(r, 600));
    }
    if (shot.hide?.length) {
      await page.addStyleTag({ content: `${shot.hide.join(', ')} { display: none !important; }` });
    }
    if (shot.blur?.length) {
      await page.addStyleTag({ content: `${shot.blur.join(', ')} { filter: blur(6px) !important; }` });
    }
    if (shot.scrollTo) {
      await page.$eval(shot.scrollTo, el => el.scrollIntoView({ block: 'start', behavior: 'instant' }));
    }
    if (shot.waitMs) {
      await new Promise(r => setTimeout(r, shot.waitMs));
    }

    const dir = path.join(outRoot, shot.slug);
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, `${shot.name}-${viewportName}.webp`);
    const options = { path: file, type: 'webp', quality: WEBP_QUALITY };
    if (shot.element) {
      const el = await page.$(shot.element);
      if (!el) {
        throw new Error(`Élément « ${shot.element} » introuvable.`);
      }
      await el.screenshot(options);
    } else {
      await page.screenshot({ ...options, fullPage: !!shot.fullPage });
    }
    return file;
  } finally {
    await page.close();
  }
}

async function main() {
  const { only } = parseArgs(process.argv.slice(2));
  const shots = only ? SHOTS.filter(s => s.slug === only) : SHOTS;
  if (!shots.length) {
    console.error(only ? `Aucune capture pour le projet « ${only} ».` : 'Aucune capture définie dans shots.mjs.');
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--lang=fr-FR'],
    headless: true
  });

  let failures = 0;
  const loggedIn = new Set();
  try {
    for (const shot of shots) {
      if (shot.session && !loggedIn.has(shot.session)) {
        try {
          await login(browser, shot.session);
          loggedIn.add(shot.session);
        } catch (err) {
          failures += shot.viewports.length;
          console.error(`✘ ${shot.slug}/${shot.name} : ${err.message}`);
          continue;
        }
      }
      for (const viewportName of shot.viewports) {
        const label = `${shot.slug}/${shot.name}-${viewportName}`;
        try {
          const file = await capture(browser, shot, viewportName);
          const kb = Math.round(fs.statSync(file).size / 1024);
          console.log(`✔ ${label}.webp (${kb} Ko)`);
        } catch (err) {
          failures++;
          console.error(`✘ ${label} : ${err.message}`);
        }
      }
    }
  } finally {
    await browser.close();
  }

  if (failures) {
    console.error(`${failures} capture(s) en échec.`);
    process.exit(1);
  }
}

main();
