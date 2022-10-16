/* Importing the GraphQL schema language. */
const { gql } = require('apollo-server-express');


/* Defining the schema for the GraphQL API. */
const typeDefs = gql`
  type Profile {
    _id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Auth {
    token: ID!
    profile: Profile
  }
  type Mutation {
    addProfile(name: String!): Profile
    removeProfile: Profile
  }
`;

/* Exporting the typeDefs variable so that it can be imported into other files. */
module.exports = typeDefs;
