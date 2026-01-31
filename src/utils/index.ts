/**
 * Creates a URL path for a given page name
 * @param pageName - The name of the page (e.g., 'contacto', 'programas')
 * @returns The URL path for the page
 */
export const createPageUrl = (pageName: string): string => {
  return `/${pageName.toLowerCase()}`;
};