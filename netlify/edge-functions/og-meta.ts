/**
 * Netlify Edge Function — Dynamic OG Meta Tags
 *
 * Intercepts HTML responses and injects the correct og:image, og:title,
 * and og:description based on the presentation slug in the URL.
 *
 * OG images are pre-generated at /og/<slug>.png by scripts/generate-og.ts
 */

import type { Context } from "@netlify/edge-functions";

// Presentation metadata — update when adding new presentations
const presentations: Record<string, { title: string; description: string }> = {
  "future-of-ai": {
    title: "The Future of AI — Brand Blvd",
    description:
      "How artificial intelligence is reshaping expectations, value, and identity — and what it means for us.",
  },
  "ic-recruitment": {
    title: "Why Bring Your Book to Brand Blvd",
    description:
      "What changes when you move from a traditional distributor to a brand-first partner.",
  },
};

export default async function handler(request: Request, context: Context) {
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  // Only modify HTML responses
  if (!contentType.includes("text/html")) {
    return response;
  }

  const url = new URL(request.url);
  const slug = url.pathname.split("/").filter(Boolean)[0] || "";
  const meta = presentations[slug];

  if (!meta) return response;

  const ogImageUrl = `${url.origin}/og/${slug}.png`;
  const ogUrl = `${url.origin}/${slug}/`;
  let html = await response.text();

  // Replace or inject OG tags
  const ogTags = `
    <meta property="og:url" content="${ogUrl}">
    <meta property="og:title" content="${meta.title}">
    <meta property="og:description" content="${meta.description}">
    <meta property="og:image" content="${ogImageUrl}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${meta.title}">
    <meta name="twitter:description" content="${meta.description}">
    <meta name="twitter:image" content="${ogImageUrl}">
    <title>${meta.title}</title>`;

  // Remove existing OG/Twitter tags and title to avoid duplicates
  html = html.replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, "");
  html = html.replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, "");
  html = html.replace(/<title>[^<]*<\/title>/i, "");
  html = html.replace(/<meta\s+name="description"[^>]*>/i, `<meta name="description" content="${meta.description}">`);

  // Insert after <head>
  html = html.replace(/<head>/i, `<head>${ogTags}`);

  return new Response(html, {
    status: response.status,
    headers: {
      ...Object.fromEntries(response.headers.entries()),
      "content-type": "text/html; charset=utf-8",
    },
  });
}

export const config = {
  path: "/*",
};
