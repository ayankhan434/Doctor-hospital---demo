export function cn(...classes: Array<string|false|null|undefined>) { return classes.filter(Boolean).join(' '); }
export function absoluteUrl(path='') { const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'; return `${base}${path}`; }
