export const getTitle = (page: string): string => {
  switch (page) {
    case '':
      return 'Terre Tropicale';
    case 'smoothies':
      return 'Smoothies | Terre Tropicale';
    case 'cocktails':
      return 'Cocktails | Terre Tropicale';
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
