const Note = require('../db/models/note')

class NoteActions {
    saveNote(req, res) {

        const newNote = new Note({
            title: 'zakupy',
            body: 'banany, jaja, mleko',
            date: '11.11.2023',
        });
        
        newNote.save().then(() => {
            console.log('jest siiii mordko')
        });

        res.send('notatka zostala stworzona');
    }

    getAllNotes(req, res) {
        //pobieranie notatek
        res.send('API dziala!!');
    }

    getNote(req, res) {
        //pobieranie notatki
        res.send('Mosz notatka');
    }
    
    updateNote(req, res) {
        //aktualizowanie notatki
        res.send('notatka zaktualizowana');
    }

    deleteNote(req, res) {
        //usuwanie notatki
        res.send('notatka usunieta');
    }
};

module.exports = new NoteActions();