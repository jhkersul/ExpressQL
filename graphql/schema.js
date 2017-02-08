import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

// Importing queries
import { user, users } from './queries/UserQueries';

// Importing mutations
import { createUser } from './mutations/UserMutations';

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root for all queries available.',
  fields: {
    users,
    user,
  },
});

const mutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'The root for all mutations available.',
  fields: {
    createUser,
  },
});

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});

export default schema;
