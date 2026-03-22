// lib/constants.ts — Site-wide strings and configuration

export const SITE = {
  name: 'C3alabs',
  tagline: 'We build AI companies.',
  domain: 'c3alabs.com',
  url: 'https://c3alabs.com',
  foundedYear: '2024',
  copyright: '© 2025 C3alabs',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Companies', href: '/products' },
  { label: 'Careers', href: '/careers' },
  { label: 'Investors', href: '/investors' },
  { label: 'The Thesis', href: '/thesis' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_GROUPS = [
  {
    label: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Investors', href: '/investors' },
    ],
  },
  {
    label: 'Products',
    links: [
      { label: 'KARAX', href: 'https://karax.ai', external: true },
      { label: 'SARVAX', href: 'https://sarvax.ai', external: true },
    ],
  },
  {
    label: 'Connect',
    links: [
      { label: 'The Thesis', href: '/thesis' },
      { label: 'Contact', href: '/contact' },
    ],
  },
] as const;

export const PRODUCTS = {
  karax: {
    name: 'KARAX',
    tagline: 'Personal Execution AI',
    domain: 'karax.ai',
    url: 'https://karax.ai',
    color: '#111111',
    oneLiner: 'One interface. Every tool connected. Work executed — not explained.',
  },
  sarvax: {
    name: 'SARVAX',
    tagline: 'AI Agents Platform',
    domain: 'sarvax.ai',
    url: 'https://sarvax.ai',
    color: '#111111',
    oneLiner: 'Autonomous agents that own entire business roles — not tasks, not workflows. Roles.',
  },
} as const;

export const CONTACT = {
  founderEmail: 'sai.casula@c3alabs.com',
  pressEmail: 'press@c3alabs.com',
  founderName: 'Sai Casula',
  founderRole: 'Founder & CEO',
} as const;

export const INQUIRY_TYPES = [
  { value: 'investor', label: "I'm an investor" },
  { value: 'career', label: "I'm looking to join" },
  { value: 'press', label: "I'm from the press" },
  { value: 'partnership', label: 'I have a partnership idea' },
  { value: 'other', label: 'Something else' },
] as const;
