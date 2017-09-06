/**
 * Gets the current date in ISO format
 * @return {String} The current date string in ISO format
 */
export const getCurrentISOStringDate = () => {
  const date = new Date();

  return date.toISOString();
};

/**
 * Converts a Date to ISO string date
 * @param  {Date} date The date that we wanna convert
 * @return {String}    A date string in ISO format
 */
export const getISOStringFromDate = (date) => {
  if (date instanceof Date) return date.toISOString();

  return null;
};

/**
 * Converts a ISO string date to Date
 * @param  {[type]} isoString A date string in ISO format that we wanna convert
 * @return {[type]}           A date object
 */
export const getDateFromISOString = (isoString) => {
  if (typeof isoString === 'undefined' || isoString === null) {
    return null;
  }

  const date = new Date(isoString);

  return date;
};
