import { base } from './_lib.js';
export async function onRequest({ request }) {
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${base(request)}/sitemap.xml\n`, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
