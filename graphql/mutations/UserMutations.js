import { GraphQLNonNull, GraphQLID } from 'graphql';
import { UserType, UserInputType } from '../types/UserTypes';
import { createUserDB, updateUserDB, deleteUserDB } from '../../models/User';

export const createUser = {
  type: UserType,
  description: 'Create a user on database',
  args: {
    user: {
      type: new GraphQLNonNull(UserInputType),
    },
  },
  resolve: (_, args) => createUserDB(args),
};

export const updateUser = {
  type: UserType,
  description: 'Updates a user on database',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The ID of the user that you wanna update',
    },
    user: {
      type: new GraphQLNonNull(UserInputType),
      description: 'User data that you wanna update',
    },
  },
  resolve: (_, args) => updateUserDB(args),
};

export const deleteUser = {
  type: UserType,
  description: 'Deletes a user on database',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The ID of the user that you wanna update',
    },
  },
  resolve: (_, args) => deleteUserDB(args),
};
