export const translateRoute = {
  "/": "صفحه اصلی",
  products: "محصولات",
};

export default function translateBreadcrumb(array) {
  const translated = [];

  for (const key in array) {
    const translatedToPersian = translateRoute[array[key]]
      ? translateRoute[array[key]]
      : array[key];
    translated.push(translatedToPersian);
  }
  return translated;
}
