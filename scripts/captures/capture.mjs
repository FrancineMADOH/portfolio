// Script de capture d'écran du portfolio (F2.1). Hors build : n'est jamais livré avec le site.
//
// Usage (depuis francinemadoh/) :
//   npm run captures                     toutes les captures de shots.mjs
//   npm run captures -- --only brightwill   seulement les captures d'un projet
//
// Chrome utilisé : CHROME_PATH, sinon /usr/bin/google-chrome. Les fichiers existants sont remplacés.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

import { SHOTS } from './shots.mjs';

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

async function capture(browser, shot, viewportName) {
  const page = await browser.newPage();
  try {
    await page.setViewport(VIEWPORTS[viewportName]);
    await page.goto(shot.url, { waitUntil: 'networkidle2', timeout: NAV_TIMEOUT_MS });
    await page.evaluate(() => document.fonts.ready);

    if (shot.hide?.length) {
      await page.addStyleTag({ content: `${shot.hide.join(', ')} { display: none !important; }` });
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
    await page.screenshot({ path: file, type: 'webp', quality: WEBP_QUALITY, fullPage: !!shot.fullPage });
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
  try {
    for (const shot of shots) {
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
