/* This is importing the mongoose package. */
const mongoose = require('mongoose');

/* This is connecting to the database. */
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/ManoloBarbershop`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

/* Exporting the connection to the database. */
module.exports = mongoose.connection;
