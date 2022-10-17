/* Importing the GraphQL schema language. */
const { gql } = require('apollo-server-express');


/* Defining the schema for the GraphQL API. */
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    name: String!
    email: String!
    password: String!
  }

  type Appointment {
    _id: ID!
    user: User!
  }

  type AppointmentTime {
  time: String!
  appointments: [Appointment!]!
}

type Day {
  # The Day ID could be the actual day itself, i.e. 2020-12-29
  id: ID!
  open: Boolean!
  hours: Int!
  appointmentTimes: AppointmentTime!
}

type Schedule {
 days: [Day!]!
}

  type Query {
    Users: [User]!
    singleUser(UserId: ID!): User
  }

  type Auth {
    token: ID!
    User: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

/* Exporting the typeDefs variable so that it can be imported into other files. */
module.exports = typeDefs;
