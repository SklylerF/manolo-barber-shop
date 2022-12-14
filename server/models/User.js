/* Destructuring the Schema and model from the mongoose library. */
const { Schema, model } = require('mongoose');
/* Importing the bcrypt library. */
const bcrypt = require('bcrypt');
const Order = require('./Order');


/* Creating a schema for the user. */

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    orders: [Order.schema]
    
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    /* This is a pre-save middleware that will hash the password before saving it to the database. */
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

/* Creating a model called User and passing in the userSchema. */
const User = model('User', userSchema);

module.exports = User;
