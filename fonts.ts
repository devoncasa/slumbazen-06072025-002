const families: Record<string, string> = {
  zh: 'Noto+Sans+SC:wght@400;600',
  ar: 'Noto+Sans+Arabic:wght@400;600',
  hi: 'Noto+Sans+Devanagari:wght@400;600',
};
export function fontStylesheet(lang: string) {
  return families[lang] ? `https://fonts.googleapis.com/css2?family=${families[lang]}&display=swap` : '';
}
export function setLanguageFont(lang: string) {
  const href = fontStylesheet(lang);
  let link = document.getElementById('locale-font') as HTMLLinkElement | null;
  if (!href) {
    link?.remove();
    return;
  }
  if (!link) {
    link = document.createElement('link');
    link.id = 'locale-font';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  if (link.href !== href) link.href = href;
}
