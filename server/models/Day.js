const { Schema, model } = require('mongoose');

const appointmentSchema = require('./Appointment');

const daySchema = new Schema({
    open: {
        type: Boolean,
        required: true,

    },
    hours: {
        type: Number,
        required: true,

    },
    appointments: [appointmentSchema],
});

const Day = model('Day', daySchema);

module.exports = Day;
