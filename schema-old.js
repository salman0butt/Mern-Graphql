const graphql = require('graphql');

const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
});

var db = require('./models');
const User = db.users;

const RootQuery = new GraphQLObjectType({
    name: 'xyz',
    fields: {
        codeimprove: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                let data = [
                    {
                        id: 12, name: 'codeimprove', email: 'code@gmail.com', phone: '8716283768123'
                    },
                    {
                        id: 13, name: 'test case', email: 'test@gmail.com', phone: '436283768123'
                    },
                ];
                return data;
            }
        },
        userList: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                let data = User.findAll();
                return data;
            }
        }
    }
});

module.exports = new GraphQLSchema({ query: RootQuery });
