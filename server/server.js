/* Importing the express, apollo-server-express, and path modules. */
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

/* Importing the connection to the database. */
const db = require('./config/connection');

const { typeDefs, resolvers } = require('./schemas');

/* Setting the port to the environment variable PORT or 3001 if the environment variable is not set. */
const PORT = process.env.PORT || 3001;

const app = express();

/**
 * It creates a new ApolloServer instance, configures it with our type definitions and resolvers, and
 * then starts it
 */
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await server.start();
  server.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

/* It creates a new ApolloServer instance, configures it with our type definitions and resolvers, and
then starts it. */
startServer();

/* Parsing the body of the request. */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
