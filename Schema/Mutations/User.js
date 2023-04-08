var db = require('../../models');
const User = db.users;
const { GraphQLList, GraphQLString, GraphQLInt } = require('graphql');
const UserType = require('../TypeDefs/UserType');
const StatusType = require('../TypeDefs/StatusType');


module.exports.USER_ADD = {
    type: StatusType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
    },
    resolve: async (_parent, args) => {
        await User.create({
            id: Math.random(),
            name: args.name,
            email: args.email,
            gender: args.gender,
        });
        return {
            success: true,
            message: "User Created Successfully",
            error: ""
        }
    }
};

module.exports.USER_UPDATE = {
    type: StatusType,
    args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
    },
    resolve: async (_parent, args) => {
        await User.update({
            name: args.name,
            email: args.email,
            gender: args.gender,
        }, {
            where: { id: args.id }
        });
        return {
            success: true,
            message: "Updated Successfully",
            error: ""
        }
    }
};

module.exports.DELETE_USER = {
    type: StatusType,
    args: {
        id: { type: GraphQLInt }
    },
    resolve: async (_parent, args) => {
        await User.destroy({
            where: { id: args.id }
        });
        return {
            success: true,
            message: "Deleted Successfully",
            error: ""
        }
    }
};
