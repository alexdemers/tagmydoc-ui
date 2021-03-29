/**
 * Math.random should be unique because of its seeding algorithm.
 * Convert it to base 36 (numbers + letters), and grab the first 9 characters
 * after the decimal.
 */
export const ID = () => {
  return "_" + Math.random().toString(36).substring(2, 9);
};
