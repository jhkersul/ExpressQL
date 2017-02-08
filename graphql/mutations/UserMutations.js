import { GraphQLNonNull } from 'graphql';
import { UserType, UserInputType } from '../types/UserTypes';
import UsersController from '../../controllers/UsersController';

export const createUser = {
  type: UserType,
  description: '',
  args: {
    user: {
      type: new GraphQLNonNull(UserInputType),
    },
  },
  resolve: (_, args) => new Promise((resolve) => {
    resolve(UsersController.createUser(args.user));
  }),
};
