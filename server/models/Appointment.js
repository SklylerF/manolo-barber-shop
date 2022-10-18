const { Schema, model } = require('mongoose');

const userSchema = require('./User')

const appointmentSchema = new Schema({
    appointmentTime: {
        type: Date,
        required: true,
    },
    approved: {
        type: Boolean,
        required: true,
        default: true,
    }
})


module.exports =  appointmentSchema