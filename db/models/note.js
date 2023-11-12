const mongoose = require('mongoose');

const Note = mongoose.model('Note', {
    title: String,
    body: String,
    date: Date,

});

module.exports = Note;