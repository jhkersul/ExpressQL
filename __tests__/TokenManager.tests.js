import { encodeToken, decodeToken } from '../services/TokenManager';

test('encodeToken - Token created must be a string', () => {
  expect(typeof encodeToken({ foo: 'bar' })).toBe('string');
});

test('decodeToken - Decode valid token', () => {
  // This token was generated using the secret 'YOUR_SECRET'
  const validToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1MDQ3MTgyODR9.SHtyzBbXVFF4h6qNLf5l5jMOgwt2exDWxAIBDHwuP9s';
  expect(decodeToken(validToken).foo).toBe('bar');
});

test('decodeToken - Decode invalid token must be null', () => {
  const invalidToken = 'abcd';
  expect(decodeToken(invalidToken)).toBe(null);
});

test('decodeToken - Null token must be null', () => {
  expect(decodeToken(null)).toBe(null);
});

test('decodeToken - Undefined token must be null', () => {
  expect(decodeToken(undefined)).toBe(null);
});

test('Encoding a token and decoding must have the same values', () => {
  const payload = { test: 'bar' };
  const encodedToken = encodeToken(payload);

  expect(decodeToken(encodedToken).test).toBe('bar');
});
