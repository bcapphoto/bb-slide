/**
 * OG Image Generator
 *
 * Screenshots each presentation's first slide at 1200x630,
 * saves to public/og/<slug>.png (committed to repo).
 *
 * Usage: npm run generate:og
 * Requires: dev server running on port 8080 (npm run dev)
 */

import { chromium } from "playwright";
import { readFileSync, mkdirSync } from "fs";
import { resolve } from "path";

const PORT = process.env.PORT || "8080";
const BASE = `http://localhost:${PORT}`;
const OUT_DIR = resolve(process.cwd(), "public/og");

function getSlugs(): string[] {
  const src = readFileSync(resolve(process.cwd(), "src/presentations/index.ts"), "utf-8");
  const matches = src.matchAll(/"([^"]+)":\s*\(\)\s*=>\s*import/g);
  return [...matches].map((m) => m[1]);
}

async function main() {
  const slugs = getSlugs();
  console.log(`Generating OG images for: ${slugs.join(", ")}`);

  mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 2,
  });

  for (const slug of slugs) {
    const page = await context.newPage();
    const url = `${BASE}/${slug}/title/1?og`;
    console.log(`  Screenshotting ${slug}...`);

    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);

    await page.screenshot({
      path: resolve(OUT_DIR, `${slug}.png`),
      type: "png",
    });

    await page.close();
    console.log(`  -> public/og/${slug}.png`);
  }

  await browser.close();
  console.log("Done. Commit public/og/ to include in deploys.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
