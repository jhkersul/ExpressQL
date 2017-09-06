import { encrypt, compare } from '../services/Encrypter';

test('encrypt - Encrypt must return a string', () => {
  expect(typeof encrypt('1234')).toBe('string');
});

test('encrypt - Null value must return a null encryption', () => {
  expect(encrypt(null)).toBe(null);
});

test('encrypt - undefined value must return a null encryption', () => {
  expect(encrypt(undefined)).toBe(null);
});

test('compare - Valid encrypted value must be truthy', () => {
  expect(compare('1234', '$2a$06$deLFJKSHInXbiJQpMn2a7e.Aay5WIbO0AwRkoTh3Ug913p.Pfutbm')).toBeTruthy();
});

test('compare - Invalid encrypted value must be falsy', () => {
  expect(compare('123456', '$2a$06$deLFJKSHInXbiJQpMn2a7e.Aay5WIbO0AwRkoTh3Ug913p.Pfutbm')).toBeFalsy();
});

test('encrypt value and compare the return must be valid', () => {
  const password = '1234';
  const encryptedPassword = encrypt(password);

  expect(compare(password, encryptedPassword)).toBeTruthy();
});
