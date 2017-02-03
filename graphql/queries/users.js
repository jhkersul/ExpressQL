import { GraphQLList } from 'graphql';
import UserType from '../types/UserType';

const USERS = [
  {
    id: '1',
    name: 'João',
    admin: false,
  },
  {
    id: '2',
    name: 'Kersul',
    admin: true,
  },
];

const users = {
  type: new GraphQLList(UserType),
  resolve: () => USERS,
};

export default users;
