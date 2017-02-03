// Imports
import express from 'express';
import graphqlHTTP from 'express-graphql';

// Setting up environment
const router = express.Router();

// Importing Schema
const Schema = require('../schema/schema');

router.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true,
}));
