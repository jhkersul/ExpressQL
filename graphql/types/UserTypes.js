import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLNonNull,
} from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id of the user',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the user',
    },
    username: {
      type: GraphQLString,
      description: 'A username for the user, commonly used in login',
    },
    email: {
      type: GraphQLString,
      description: 'User email',
    },
    password: {
      type: GraphQLString,
      description: 'Encrypted password',
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
    username: {
      type: GraphQLString,
      description: 'A username for the user, commonly used in login',
    },
    email: {
      type: GraphQLString,
      description: 'User email',
    },
    password: {
      type: GraphQLString,
      description: 'Encrypted password',
    },
    admin: {
      type: GraphQLBoolean,
      description: 'Whether or not the user is admin',
    },
  },
});
