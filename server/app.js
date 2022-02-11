const express = require("express");
const app = express();
// this allows express to understand graphql
const graphqlHTTP = require("express-graphql").graphqlHTTP;
// import schema
const schema = require("./schema/schema");

// Creating middleware , a single route that interacts with our all our data
// a single powerful "main" endpoint
// app.use("/graphql", graphqlHTTP()); here express hands off control to express-graphql
app.use("/graphql", graphqlHTTP({ schema: schema }));

app.listen(4000, () => console.warn("Started listening on port :4000"));
