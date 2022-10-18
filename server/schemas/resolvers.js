/* Importing the AuthenticationError from the apollo-server-express package. */
const { AuthenticationError } = require("apollo-server-express");
/* Importing the User model from the models folder. */
const { User } = require("../models");
/* Importing the signToken function from the auth.js file. */
const { signToken } = require("../utils/auth");



/* This is the resolver for the queries and mutations. */
const resolvers = {
  Query: {
    singleUser: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect username or password");
      }
      const correctPassword = await user.isCorrectPassword(password);

      // check password
      if (!correctPassword) {
        throw new AuthenticationError("Incorrect username or password");
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
  }
}

module.exports = resolvers;