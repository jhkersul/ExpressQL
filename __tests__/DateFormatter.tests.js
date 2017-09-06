import {
  getISOStringFromDate,
  getCurrentISOStringDate,
  getDateFromISOString,
  isValidISOString,
} from '../services/DateFormatter';


test('getCurrentISOStringDate - Getting current ISO date must be equal to Date().toISOString()', () => {
  // We will compare the current ISO String getting using Date()
  const seed = getCurrentISOStringDate();
  const expected = new Date().toISOString();
  // To compare, we will remove the milliseconds
  expect(seed.substring(0, 20)).toBe(expected.substring(0, 20));
});

test('getISOStringFromDate - Comparing valid date to iso string', () => {
  // Date has this format (year, month, day, hours, minutes, seconds, milliseconds)
  const seed = new Date(Date.UTC(2017, 1, 1, 10, 0, 0, 0));
  expect(getISOStringFromDate(seed)).toBe('2017-02-01T10:00:00.000Z');
});

test('getISOStringFromDate - Null must return a null value', () => {
  expect(getISOStringFromDate(null)).toBe(null);
});

test('getISOStringFromDate - Undefined must return a null value', () => {
  expect(getISOStringFromDate(undefined)).toBe(null);
});

test('getDateFromISOString - Comparing a valid ISO string to a date', () => {
  const seed = '2017-02-01T10:00:00.000Z';
  const expected = new Date(Date.UTC(2017, 1, 1, 10, 0, 0, 0));

  expect(getDateFromISOString(seed)).toEqual(expected);
});

test('getDateFromISOString - Null ISO string must return null', () => {
  expect(getDateFromISOString(null)).toEqual(null);
});

test('getDateFromISOString - Undefined ISO string must return null', () => {
  expect(getDateFromISOString(undefined)).toEqual(null);
});

test('getDateFromISOString - Invalid ISO string must return null', () => {
  expect(getDateFromISOString('abcdasdasda')).toEqual(null);
});

test('isValidISOString - Valid isoString must be truthy', () => {
  expect(isValidISOString('2017-02-01T10:00:00.000Z')).toBeTruthy();
});

test('isValidISOString - Invalid isoString must be falsy', () => {
  expect(isValidISOString('djhakjdhjkashdas')).toBeFalsy();
});
