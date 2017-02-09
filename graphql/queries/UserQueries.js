import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { UserType } from '../types/UserTypes';
import { getUsersDB, getUserByIdDB } from '../../models/User';

export const user = {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'ID of the user that you wanna get',
    },
  },
  resolve: (_, args) => getUserByIdDB(args.id),
};

export const users = {
  type: new GraphQLList(UserType),
  resolve: () => getUsersDB(),
};
