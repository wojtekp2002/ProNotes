const mongoose = require('mongoose');

const LogInSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Users = mongoose.model('Users', LogInSchema);

module.exports = Users;