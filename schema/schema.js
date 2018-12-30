const graphql = require('graphql');
const Diabet = require('../models/diabet');

const { GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLFloat,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;


const DiabetType = new GraphQLObjectType({
    name: "Diabet",
    fields: () => ({
        id: { type: GraphQLID },
        pregnancies: { type: GraphQLFloat },
        glucose: { type: GraphQLFloat },
        bloodPressure: { type: GraphQLFloat },
        skinThickness: { type: GraphQLFloat },
        insulin: { type: GraphQLFloat },
        bmi: { type: GraphQLFloat },
        diabetesPedigreeFunction: { type: GraphQLFloat },
        age: { type: GraphQLInt },
        outcome: { type: GraphQLFloat }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        diabets: {
            type: GraphQLList(DiabetType),
            resolve(parent, args) {
                return Diabet.find({});
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});