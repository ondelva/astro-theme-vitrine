// src/config.ts — single entry point for site settings. Everything site-specific lives here; never hardcode in components.
export const site = {
  name: 'Vitrine',
  description: 'A catalogue of objects, plate by plate.',
  url: 'https://example.com',
  locale: 'en', // BCP 47, e.g. 'en', 'ko'
  author: 'Ada Example', // Fictional demo author. Replace with your name
  defaultOgImage: '/og-default.jpg', // the card for every page without one of its own
} as const;

export const nav = {
  header: [
    { label: 'Catalogue', href: '/catalogue' },
    { label: 'Collections', href: '/collections' },
    { label: 'Colophon', href: '/colophon' },
  ],
  footer: [
    {
      title: 'Site',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/', icon: 'lucide:github' },
    // Icons are Lucide names (https://lucide.dev/icons)
  ],
} as const;

export const seo = {
  titleTemplate: '%s · Vitrine',
  twitterHandle: '',
  jsonLd: { type: 'Person' as 'Person' | 'Organization', name: site.author },
};

export const contact = {
  // Any service that takes a plain POST: Formspree, Web3Forms, Basin. The form
  // posts straight to it, so there is no script and nothing to keep running.
  formEndpoint: 'https://formspree.io/f/your-form-id',
  email: 'hello@example.com', // shown beside the form for people who would rather write
  responseTime: 'Two or three days, and every message is read.',
};

export const catalogue = {
  // 12 fills the plate grid twice over with the 22 sample objects, so the demo
  // actually shows its pagination. A real archive can raise it: the grid is the
  // same at any count.
  platesPerPage: 12,
  relatedPlates: 3,
  // Accession numbers are derived from catalogue order (01, 02, …) unless an
  // object sets its own. Turn off to hide them everywhere.
  showAccession: true,
};

export const features = {
  darkMode: true,
  // The signature: 1px rule grid, objects placed inside the cells, cartellino
  // labels. Off falls back to a plain spaced grid with no rules and no labels.
  plate: true,
};

export const analytics = {
  provider: null as null | 'plausible' | 'ga4' | 'umami',
  id: '',
  // Self-hosted Plausible or Umami: the origin serving the script, no trailing slash.
  // Empty means the hosted service. GA4 ignores it.
  host: '',
};
