import mongoose from 'mongoose';
import { encrypt } from '../services/Encrypter';
import {
  getCurrentISOStringDate,
  getDateFromISOString,
} from '../services/DateFormatter';

// Defining user Mongoose Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  birthday: { type: Date },
  admin: { type: Boolean, default: false },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

UserSchema.set('toJSON', { getters: true });

export const User = mongoose.model('User', UserSchema);

/**
 * This function mounts the user data with the right params
 * @param  {Object}  args           Arguments to create user
 * @param  {Boolean} [update=false] If you wanna get the data for update
 * @return {Object}                 Returns the userData object
 */
const getUserData = (args, update = false) => {
  // Getting params
  const name = args.user.name;
  const email = args.user.email;
  const birthday = getDateFromISOString(args.user.birthday);
  const password = encrypt(args.user.password);
  const createdAt = getCurrentISOStringDate();
  const updatedAt = getCurrentISOStringDate();

  // Creating userData object
  const userData = {};
  // Mounting userData object
  if (name) userData.name = name;
  if (email) userData.email = email;
  if (birthday) userData.birthday = birthday;
  if (password) userData.password = password;
  if (update) userData.updatedAt = updatedAt;
  else {
    userData.createdAt = createdAt;
    userData.updatedAt = updatedAt;
  }

  return userData;
};

/**
 * Get a list of users based on a field provided
 * passing a value for that particular field
 * @param  {String} field   Field that you wanna use as filter
 * @param  {String} value   Value of the field that you wanna filter
 * @return {Promise}        Returns the Promise on getting a list of users
 */
export const getUsersByFieldDB = (field, value) => (
  new Promise((resolve, reject) => {
    const obj = {};
    obj[field] = value;
    User.find(obj).exec((err, res) => (
      err ? reject(err) : resolve(res)
    ));
  })
);

/**
 * This function creates a user on Database
 * @param  {Object} args The arguments to create a user
 * @return {Promise}     Returns the Promise on creating a user
 */
export const createUserDB = args => (
  new Promise((resolve, reject) => {
    // Creating User object that will be added to DB
    const newUser = new User(getUserData(args));

    // First, we gonna check if the email already exists
    getUsersByFieldDB('email', newUser.email)
      .then((users) => {
        // If didn't find any user
        if (users.length === 0) {
          // Saving new user do DB
          newUser.save((err, res) => (
            err ? reject(err) : resolve(res)
          ));
        } else {
          // If found users, reject
          reject('User already exists');
        }
      })
      .catch(err => reject(err));
  })
);

/**
 * This function updates a user on Database
 * @param  {Object} args  Arguments to update a user
 * @return {Promise}      Returns the Promise on updating a user
 */
export const updateUserDB = args => (
  new Promise((resolve, reject) => {
    // Updating user
    User.findByIdAndUpdate(args.id, { $set: getUserData(args, true) }, { new: true },
      (err, res) => (
        err ? reject(err) : resolve(res)
      ),
    );
  })
);

/**
 * This functions get a list of users from database
 * @return {Promise} Returns the Promise on getting a list of users
 */
export const getUsersDB = () => (
  new Promise((resolve, reject) => {
    User.find({}).exec((err, res) => (
      err ? reject(err) : resolve(res)
    ));
  })
);

/**
 * This functions get a single user, filtered by it's ID
 * @param  {String} id  The ID of the user that we wanna get
 * @return {Promise}    Returns the Promise on getting a single user
 */
export const getUserByIdDB = id => (
  new Promise((resolve, reject) => {
    User.find({ _id: id }).exec((err, res) => (
      err ? reject(err) : resolve(res[0])
    ));
  })
);

/**
 * Deleting a user from database
 * @param  {Object} args  Arguments necessary to delete a user
 * @return {Promise}      A promise with the deleted user
 */
export const deleteUserDB = args => (
  new Promise((resolve, reject) => {
    // Updating user
    User.findByIdAndRemove(args.id, (err, res) => (
      err ? reject(err) : resolve(res)
    ));
  })
);
