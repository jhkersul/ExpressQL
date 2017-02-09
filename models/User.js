import mongoose from 'mongoose';
import EncryptController from '../controllers/EncryptController';
import DateController from '../controllers/DateController';

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
 */
const getUserData = (args, update = false) => {
  const name = args.user.name;
  const email = args.user.email;
  const birthday = DateController.isoStringToDate(args.user.birthday);
  const password = EncryptController.encrypt(args.user.password);
  const createdAt = DateController.currentDateISOString();
  const updatedAt = DateController.currentDateISOString();

  const userData = {};

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
 * This function creates a user on Database
 */
export const createUserDB = args => (
  new Promise((resolve, reject) => {
    // Creating User object that will be added to DB
    const newUser = new User(getUserData(args));

    // Saving new user do DB
    newUser.save((err, res) => (
      err ? reject(err) : resolve(res)
    ));
  })
);

/**
 * This function updates a user on Database
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
 */
export const getUserByIdDB = id => (
  new Promise((resolve, reject) => {
    User.find({ _id: id }).exec((err, res) => (
      err ? reject(err) : resolve(res[0])
    ));
  })
);
