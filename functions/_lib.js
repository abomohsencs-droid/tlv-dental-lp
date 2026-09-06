export function base(request) {
  const h = new URL(request.url).hostname;
  return h.endsWith('.co.il') ? 'https://www.tlvdental-clinic.co.il' : 'https://tlvdental-clinic.com';
}
export function sitemap(b) {
  const pages = [['/','weekly','1.0'],['/emergency/','weekly','0.9'],['/emergency-en/','weekly','0.9'],['/implants/','monthly','0.8'],['/privacy-policy/','yearly','0.2']];
  const urls = pages.map(([p,c,pr]) => `<url><loc>${b}${p}</loc><changefreq>${c}</changefreq><priority>${pr}</priority></url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
