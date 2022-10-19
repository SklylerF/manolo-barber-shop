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
    appointmentTimeDate: String!
    approved: Boolean
    user: User!
  }

type Day {
  # The Day ID could be the actual day itself, i.e. 2020-12-29
  _id: ID!
  open: Boolean!
  hours: Int!
  appointments: [Appointment!]!
}

type Auth {
    token: ID!
    User: User
  }

  input UserInput {
    username: String
    name: String
    email: String
  }


  type Query {
    getUsers: [User!]!
    singleUser(UserId: ID!): User
    getDaySchedule(Date: ID!): Day
    }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, name: String!,  email: String!, password: String!): Auth
    requestAppointment(appointmentTimeDate: String!, input: UserInput!): Appointment
    approveAppointment(id: ID!): Appointment
    
  }
`;

/* Exporting the typeDefs variable so that it can be imported into other files. */
module.exports = typeDefs;
