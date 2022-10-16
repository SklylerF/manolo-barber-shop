/* Importing the GraphQL schema language. */
const { gql } = require('apollo-server-express');


/* Defining the schema for the GraphQL API. */
const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    Users: [User]!
    User(UserId: ID!): User
  }

  type Auth {
    token: ID!
    User: User
  }
  type Mutation {
    addUser(name: String!): User
    removeUser: User
  }
`;

/* Exporting the typeDefs variable so that it can be imported into other files. */
module.exports = typeDefs;
