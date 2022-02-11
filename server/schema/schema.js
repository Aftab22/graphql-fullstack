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

// dummy data for temorary use
const movies = [
  { name: "Batman Begins", year: 2005, id: 1 },
  { name: "The Dark Knight", year: 2008, id: 2 },
  { name: "The Dark Knight Rises", year: 2012, id: 3 },
];

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
        return movies.find((movie) => movie.id === args.id);
      },
    },
  },
});

// export root schema to be used
module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
});
