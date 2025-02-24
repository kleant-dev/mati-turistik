export const normalizeDate = (date: Date): Date => {
  const normalizedDate = new Date(date);
  // Set the date to midnight UTC
  normalizedDate.setUTCHours(0, 0, 0, 0);
  return normalizedDate;
};
