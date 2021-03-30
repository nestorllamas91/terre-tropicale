export const getTitle = (page: string): string => {
  switch (page) {
    case '':
      return 'Terre Tropicale';
    case 'nos-smoothies':
      return 'Nos smoothies | Terre Tropicale';
    case 'nos-cocktails':
      return 'Nos cocktails | Terre Tropicale';
    case 'a-propos':
      return 'À propos | Terre Tropicale';
    case 'contact':
      return 'Contact | Terre Tropicale';
    case '404':
      return 'Terre Tropicale';
    case '500':
      return 'Terre Tropicale';
    default:
      throw new Error(`Unknown page type: ${page}`);
  }
};
