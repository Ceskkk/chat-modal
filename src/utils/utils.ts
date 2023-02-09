// Get current Date formated to string
export const formatDate = (date: Date): string => {
  return date.toJSON().slice(0, 10) + " / " + date.toJSON().slice(11, 16);
};
