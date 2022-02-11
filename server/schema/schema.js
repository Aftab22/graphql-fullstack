const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    year: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get data from DB
        // parent param used for relations
        // args has arguments passed to query , ex: args.id
      },
    },
  },
});

// export root schema to be used
module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
});
