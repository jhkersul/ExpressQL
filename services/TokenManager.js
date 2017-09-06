import jwt from 'jsonwebtoken';
import config from '../config.json';

export const encodeToken = (payload) => {
  // Validating entry
  if (typeof payload === 'undefined' || payload === null) {
    return null;
  }
  // Creating token
  const token = jwt.sign(payload, config.jwt.secret);

  return token;
};

export const decodeToken = (token) => {
  // Getting decoded token
  const decoded = jwt.verify(token, config.jwt.secret, (err, dec) => {
    if (err) return null;
    return dec;
  });

  return decoded;
};
