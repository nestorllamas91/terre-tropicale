export function getTitle(page) {
  let titleTab = '';
  switch (page) {
    case '/_error':
      titleTab = 'Terre Tropicale';
      break;
    case '/':
      titleTab = 'Terre Tropicale';
      break;
    case '/smoothies':
      titleTab = 'Smoothies | Praetorians Arena';
      break;
    case '/cocktails':
      titleTab = 'Cocktails | Praetorians Arena';
      break;
    case '/a-propos':
      titleTab = 'À propos | Praetorians Arena';
      break;
    case '/contact':
      titleTab = 'Contact | Praetorians Arena';
  }
  return titleTab;
}
