import moment from 'moment';

/**
 * Check if it's a valid isoString
 * @param  {String}  isoString   The isoString that we wanna check if it's valid
 * @return {Boolean}             True/false - If it's valid or not
 */
export const isValidISOString = isoString => !isNaN(Date.parse(isoString));

/**
 * Gets the current date in ISO format
 * The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ
 * @return {String} The current date string in ISO format
 */
export const getCurrentISOStringDate = () => moment().toISOString();

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
 * @param  {String} isoString A date string in ISO format that we wanna convert
 * @return {Date}             A date object
 */
export const getDateFromISOString = (isoString) => {
  if (typeof isoString === 'undefined' || isoString === null || !isValidISOString(isoString)) {
    return null;
  }
  // Creating date object
  const date = new Date(isoString);

  return date;
};
