import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInputObjectType,
} from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: {
    id: {
      type: GraphQLID,
      description: 'The id of the user',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the user',
    },
    admin: {
      type: GraphQLBoolean,
      description: 'Whether or not the user is admin',
    },
  },
});

export const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'Defines all the arguments that are needed to create or update a user',
  fields: {
    name: {
      type: GraphQLString,
      description: 'The name of the user',
    },
    admin: {
      type: GraphQLBoolean,
      description: 'Whether or not the user is admin',
    },
  },
});
