const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttendeeSchema = new Schema({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    contact: {
        type: String
    },
    handicap: {
        type: String
    }
});


module.exports = mongoose.model('Attendee', AttendeeSchema);