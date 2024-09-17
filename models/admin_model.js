const mongoose = require('mongoose');

const path = require('path');

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})
const admin = mongoose.model('admin', adminSchema)
module.exports = admin