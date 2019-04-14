const express = require("express");

const { ApolloServer, gql } = require('apollo-server-express');

const {typeDefs, resolvers} = require("./schema");

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });



const PORT = 5678;

app.listen(PORT, () => {
  console.log(`
    GraphQL corriendo en http://localhost:${PORT}
  `);
});
