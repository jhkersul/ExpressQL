import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean, GraphQLSchema } from 'graphql';

const TODOs = [
  {
    id: '1',
    name: 'Read emails',
    completed: false,
  },
  {
    id: '2',
    name: 'Buy orange',
    completed: true,
  },
];

const UserType = new GraphQLObjectType({
  name: 'users',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    completed: {
      type: GraphQLBoolean,
    },
  }),
});

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    users: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, { id }) => TODOs.find(todo => todo.id === id),
    },
  }),
});

module.exports = new GraphQLSchema({
  query: queryType,
});
