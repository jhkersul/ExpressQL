
import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

// Importing queries
import users from './queries/users';

// Importing mutations
import createUser from './mutations/createUser';


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Root query',
    fields: {
      users,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Root mutation',
    fields: {
      createUser,
    },
  }),
});

export default schema;
