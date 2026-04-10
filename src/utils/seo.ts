export const SITE_URL = 'https://tecnicopa.com';
export const DEFAULT_OG_IMAGE = '/logo.png';
export const DEFAULT_ROBOTS = 'index, follow';

export function resolveOgImageUrl(ogImage: string, siteURL: string = SITE_URL): string {
  return ogImage.startsWith('http') ? ogImage : `${siteURL}${ogImage}`;
}
