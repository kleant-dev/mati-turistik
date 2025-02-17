export const capitalize = (text: string) => {
  const firstLetter = text[0].toUpperCase();
  return firstLetter + text.slice(1);
};
