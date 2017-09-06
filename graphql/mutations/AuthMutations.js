import { GraphQLNonNull } from 'graphql';
import { AuthInputType, AuthType } from '../types/AuthTypes';
import { authenticate } from '../../models/Auth';

export const authUser = {
  type: AuthType,
  description: 'Authenticate user',
  args: {
    auth: {
      type: new GraphQLNonNull(AuthInputType),
    },
  },
  resolve: (_, args) => authenticate(args),
};

export const NONE = 'NONE';
