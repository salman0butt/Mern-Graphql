var db = require('../../models');
const User = db.users;
const { GraphQLList, GraphQLInt } = require('graphql');
const UserType = require('../TypeDefs/UserType');

module.exports.USER_LIST = {
    type: new GraphQLList(UserType),
    resolve(parent, args) {
        let data = User.findAll();
        return data;
    }
};

module.exports.USER_LIST2 = {
    type: new GraphQLList(UserType),
    resolve(parent, args) {
        let data = User.findAll();
        return data;
    }
};

module.exports.USER_DETAILS = {
    type: new GraphQLList(UserType),
    args: {
        id: { type: GraphQLInt }
    },
    resolve(parent, args) {
        let data = User.findAll({where: {id: args.id}});
        return data;
    }
};