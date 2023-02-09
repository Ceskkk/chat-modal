// Get current Date formated to string
export const getCurrentDateFormated = (): string => {
  return (
    new Date().toJSON().slice(0, 10) + " / " + new Date().toJSON().slice(11, 16)
  );
};
