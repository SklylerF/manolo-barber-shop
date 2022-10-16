/* This is importing the jsonwebtoken package. */
const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent via  req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    /* If there is no token, it returns the request. */
    if (!token) {
      return req
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    /* Returning the request object. */
    return req

  },
  /* Creating a payload object with the username, email, and _id. */
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    /* Creating a token with the payload, secret, and expiration date. */
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
