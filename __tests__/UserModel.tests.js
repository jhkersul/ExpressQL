import { getUsersByFieldDB, getUserByIdDB } from '../models/User';
import { connectToMongo } from '../services/Mongo';
import config from '../config.json';

it('getUsersByField - Must match the snapshot', () => {
  // Connecting to Mongo
  connectToMongo(config.mongodb.server);
  // Defining params
  const email = 'kersul@kersul.com';
  expect.assertions(1);
  return getUsersByFieldDB('email', email).then((data) => {
    // console.info(data);
    expect(data).toMatchSnapshot();
  });
});

it('getUserByIdDB - Must match the snapshot', () => {
  // Connecting to Mongo
  connectToMongo(config.mongodb.server);
  // Defining params
  const id = '59b03e568ce6e41d50459410';
  expect.assertions(1);
  return getUserByIdDB(id).then((data) => {
    // console.info(data);
    expect(data).toMatchSnapshot();
  });
});
