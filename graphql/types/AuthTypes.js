import {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';

export const AuthType = new GraphQLObjectType({
  name: 'Auth',
  description: 'A auth type',
  fields: {
    token: {
      type: GraphQLString,
      description: 'The desired token',
    },
  },
});

export const AuthInputType = new GraphQLInputObjectType({
  name: 'AuthInput',
  description: 'Defines all the arguments that are needed to authenticate a user',
  fields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User email',
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User password',
    },
  },
});

export const NONE = 'NONE';
