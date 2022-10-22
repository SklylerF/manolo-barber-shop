/* Importing the GraphQL schema language. */
const { gql } = require("apollo-server-express");

/* Defining the schema for the GraphQL API. */
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    name: String
    email: String
    password: String
    orders: [Order]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Checkout {
    session: ID
  }

  input CategoryInput {
    _id: ID
    name: String
  }

  input UserInput {
    username: String
    name: String
    email: String
  }

  type Query {
    getUsers: [User]
    singleUser(username: String!): User
    categories: [Category]
    product(_id: ID!): Product
    products(category: ID, name: String): [Product]
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, name: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    addOrder(products: [ID]!): Order
    addProduct(name: String!, description: String, image: String, quantity: Int, price: Float, Category: CategoryInput ): Product
    updateProduct(_id: ID!, quantity: Int!): Product
  }
`;

/* Exporting the typeDefs variable so that it can be imported into other files. */
module.exports = typeDefs;
