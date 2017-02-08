import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { UserType } from '../types/UserTypes';
import UsersController from '../../controllers/UsersController';

export const user = {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'ID of the user that you wanna get',
    },
  },
  resolve: (_, args) => new Promise((resolve) => {
    resolve(UsersController.getUserByID(args.id));
  }),
};

export const users = {
  type: new GraphQLList(UserType),
  resolve: () => new Promise((resolve) => {
    resolve(UsersController.getUsers());
  }),
};
