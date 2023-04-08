const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');

const { USER_LIST, USER_LIST2, USER_DETAILS } = require('./Queries/User');
const { USER_ADD, USER_UPDATE, DELETE_USER } = require('./Mutations/User');

var db = require('../models');
const User = db.users;

const RootQuery = new GraphQLObjectType({
    name: 'xyz',
    fields: {
        userList: USER_LIST,
        codeimprove: USER_LIST2,
        userDetails: USER_DETAILS
    }
});

const Mutation = new GraphQLObjectType({
    name: 'mutation',
    fields: {
        createUser: USER_ADD,
        userUpdate: USER_UPDATE,
        deleteUser: DELETE_USER
    }
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
