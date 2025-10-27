export default function sitemap() {
  const base = "https://sospneus74.fr";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#tarifs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#galerie`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#agence`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
