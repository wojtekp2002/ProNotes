const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
    },
    date: {
        type: Date
    },
});

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;