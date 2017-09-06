// Imports
import express from 'express';
import graphqlHTTP from 'express-graphql';
// Relative imports
import Schema from '../graphql/schema';

// Setting up environment
const router = express.Router();

router.use('/', graphqlHTTP({
  schema: Schema,
  graphiql: true,
}));
