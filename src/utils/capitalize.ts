export const capitalize = (text: string) => {
  const firstLetter = text[0].toUpperCase();
  console.log(firstLetter);
  return firstLetter + text.slice(1);
};
