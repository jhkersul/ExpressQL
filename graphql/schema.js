import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

// Importing queries
import { user, users } from './queries/UserQueries';

// Importing mutations
import { createUser, updateUser } from './mutations/UserMutations';

// Listing all queries available
const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root for all queries available.',
  fields: {
    users,
    user,
  },
});

// Listing all mutations available
const mutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'The root for all mutations available.',
  fields: {
    createUser,
    updateUser,
  },
});

// Creating schema
const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});

export default schema;
