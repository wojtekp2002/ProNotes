const Note = require('../db/models/note')

module.exports = {
    saveNote(req, res) {

        const newNote = new Note({
            title: 'zakupy',
            body: 'banany, jaja, mleko',
            date: '11.11.2023',
        });
        
        newNote.save().then(() => {
            console.log('jest siiii mordko')
        });

        res.send('strona główna działa!');
    }
};