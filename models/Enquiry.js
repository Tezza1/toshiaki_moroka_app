const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    notes: {
        type: String
    },
    action: {
        type: String,
        enum: ['Not Started', 'Contacted', 'Completed'],
    },
    date: {
        type: Date,
        'default': Date.now
    }
});

mongoose.model('enquiries', enquirySchema);