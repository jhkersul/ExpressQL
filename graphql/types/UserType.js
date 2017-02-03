import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'users',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    admin: {
      type: GraphQLBoolean,
    },
  }),
});

export default UserType;
