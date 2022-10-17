const { Schema, model } = require('mongoose');

const userSchema = require('./User')

const appointmentSchema = new Schema({
    appointmentTime: {
        type: Date,
        required: true,
    },
    user: userSchema,
})

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment