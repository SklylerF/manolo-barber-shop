/* This is importing the mongoose package. */
const mongoose = require("mongoose");

/* This is connecting to the database. */
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/Manolo-Barbershop`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/* Exporting the connection to the database. */
module.exports = mongoose.connection;
