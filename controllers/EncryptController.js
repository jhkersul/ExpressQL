import bcrypt from 'bcrypt';

// Salt rounds constant
const saltRounds = 10;

/**
 * The objective of this class is to deal with encrypted data,
 * mainly used to generate and check passwords
*/
class EncryptController {

  static encrypt(text) {
    if (typeof text === 'undefined' || text === null) {
      return null;
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(text, salt);

    return hash;
  }

  static compare(text, hash) {
    return bcrypt.compareSync(text, hash);
  }

}

export default EncryptController;
