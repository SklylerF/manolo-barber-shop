/* Importing the AuthenticationError from the apollo-server-express package. */
const { AuthenticationError } = require("apollo-server-express");
/* Importing the User model from the models folder. */
const { User, Category, Order, Product } = require("../models");
/* Importing the signToken function from the auth.js file. */
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_51LvW3REWiFhsoBBB3p2g8EczVo68lxoEJpM74GvF3bZphfwvDvbVIMlX9c337622l3WBUhVaCLZNXcDhxwzAnfrG00B8NDBqNq");

/* This is the resolver for the queries and mutations. */
const resolvers = {
  Query: {
    /* This is a query that is used to find all categories. */
    categories: async () => {
      return await Category.find();
    },
    /* This is a query that is used to find all products. */
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate("category");
    },
    /* This is a query that is used to find a single product by its id. */
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("category");
    },
    /* This is a query that is used to find all users. */
    getUsers: async (perent, args, context) => {
      return User.find({});
    },
    /* This is a query that is used to find a single user by their username. */
    singleUser: async (parent, args, context) => {
      return User.findOne({
        username: args.username,
      });
    },
    /* This is a query that is used to find a single order by its id. */
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    /* This is the checkout mutation. It is used to create a checkout session. */
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products");

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },

  Mutation: {
    /* This is the login mutation. It is used to log a user in. */
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
    /* This is the addUser mutation. It is used to create a new user. */
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    /* This is the addOrder mutation. It is used to create a new order. */
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
    addProduct: async (parent, args) => {
      const product = await Product.create(args);
      return { product };
    },
    addCategory: async (parent, args) => {
      const category = await Category.create(args);
      return category;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
  },
};

module.exports = resolvers;
