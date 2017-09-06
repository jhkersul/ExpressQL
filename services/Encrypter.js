/**
 * The objective of this file is to deal with encrypted data,
 * mainly used to generate and check passwords
*/

import bcrypt from 'bcrypt';

// Number of salt rounds
const saltRounds = 10;

/**
 * Encrypts a text, to save as a password
 * @param  {String} text The text that we wanna encrypt
 * @return {String}      Returns the hash (encrypted text)
 */
export const encrypt = (text) => {
  if (typeof text === 'undefined' || text === null) {
    return null;
  }

  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(text, salt);

  return hash;
};

/**
 * Compares a text with a hash and check if it's a match.
 * Commonly used to check if a password is valid.
 * @param  {String} text The text that we wanna compare
 * @param  {String} hash The hash we wanna compare
 * @return {Boolean}     Returns true/false. If matches or not
 */

export const compare = (text, hash) => bcrypt.compareSync(text, hash);
