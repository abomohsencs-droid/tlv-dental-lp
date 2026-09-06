import { base, sitemap } from './_lib.js';
export async function onRequest({ request }) {
  return new Response(sitemap(base(request)), { headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' } });
}
