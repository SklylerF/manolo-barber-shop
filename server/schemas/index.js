/* Importing the typeDefs from the typeDefs.js file. */
const typeDefs = require('./typeDefs');
/* Importing the resolvers from the resolvers.js file. */
const resolvers = require('./resolvers');

/* Exporting the typeDefs and resolvers to be used in the index.js file. */
module.exports = { typeDefs, resolvers };