import { compare } from '../services/Encrypter';
import { encodeToken } from '../services/TokenManager';
import { getCurrentISOStringDate } from '../services/DateFormatter';
import { getUsersByFieldDB } from './User';

export const authenticate = args => (
  new Promise((resolve, reject) => {
    const email = args.auth.email;
    const password = args.auth.password;

    // Getting user by email
    getUsersByFieldDB('email', email)
      .then((res) => {
        if (res.length === 0) {
          reject('User not found');
        } else {
          // Defining params
          const user = res[0];
          const hashPassword = user.password;
          // Checking if password if valid
          if (compare(password, hashPassword)) {
            // Creating token object
            const token = encodeToken({
              id: user._id, // eslint-disable-line
              email: user.email,
              createdAt: getCurrentISOStringDate(),
            });
            resolve({ token });
          } else {
            reject('Invalid password');
          }
        }
      })
      .catch(err => reject(err));
  })
);

export const NONE = 'NONE';
