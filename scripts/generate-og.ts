/**
 * OG Image Generator
 *
 * Spins up a static server from dist/, screenshots each presentation's
 * first slide at 1200x630, saves to dist/og/<slug>.png.
 *
 * Usage: npx tsx scripts/generate-og.ts
 * Assumes: dist/ already exists from `vite build`
 */

import { chromium } from "playwright";
import { readFileSync, mkdirSync, existsSync } from "fs";
import { resolve, join } from "path";
import { createServer } from "http";
import { lookup } from "mime-types";

const PORT = 4174;
const BASE = `http://localhost:${PORT}`;
const DIST = resolve(process.cwd(), "dist");
const OUT_DIR = resolve(DIST, "og");

function getSlugs(): string[] {
  const src = readFileSync(resolve(process.cwd(), "src/presentations/index.ts"), "utf-8");
  const matches = src.matchAll(/"([^"]+)":\s*\(\)\s*=>\s*import/g);
  return [...matches].map((m) => m[1]);
}

// Simple static file server that serves dist/ with SPA fallback
function startStaticServer(): Promise<ReturnType<typeof createServer>> {
  return new Promise((res) => {
    const server = createServer((req, reply) => {
      let filePath = join(DIST, req.url?.split("?")[0] || "/");
      if (!existsSync(filePath) || filePath.endsWith("/")) {
        // SPA fallback
        if (existsSync(join(filePath, "index.html"))) {
          filePath = join(filePath, "index.html");
        } else {
          filePath = join(DIST, "index.html");
        }
      }
      try {
        const data = readFileSync(filePath);
        const mime = lookup(filePath) || "application/octet-stream";
        reply.writeHead(200, { "Content-Type": mime });
        reply.end(data);
      } catch {
        reply.writeHead(404);
        reply.end("Not found");
      }
    });
    server.listen(PORT, () => res(server));
  });
}

async function main() {
  const slugs = getSlugs();
  console.log(`Generating OG images for: ${slugs.join(", ")}`);

  mkdirSync(OUT_DIR, { recursive: true });

  const server = await startStaticServer();
  console.log(`  Static server running on ${BASE}`);

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
    console.log(`  -> dist/og/${slug}.png`);
  }

  await browser.close();
  server.close();
  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
