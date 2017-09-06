import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLNonNull,
} from 'graphql';
import { getISOStringFromDate } from '../../services/DateFormatter';

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
    email: {
      type: GraphQLString,
      description: 'User email',
    },
    password: {
      type: GraphQLString,
      description: 'Encrypted password',
    },
    birthday: {
      type: GraphQLString,
      description: 'Birthday of the user on the ISO format (ISOString)',
      resolve: user => getISOStringFromDate(user.birthday),
    },
    admin: {
      type: GraphQLBoolean,
      description: 'Whether or not the user is admin',
    },
    createdAt: {
      type: GraphQLString,
      description: 'Created date in ISO format',
      resolve: user => getISOStringFromDate(user.createdAt),
    },
    updatedAt: {
      type: GraphQLString,
      description: 'Updated date in ISO format',
      resolve: user => getISOStringFromDate(user.updatedAt),
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
    email: {
      type: GraphQLString,
      description: 'User email',
    },
    password: {
      type: GraphQLString,
      description: 'Encrypted password',
    },
    birthday: {
      type: GraphQLString,
      description: 'Birthday of the user on the ISO format (ISOString)',
    },
  },
});
