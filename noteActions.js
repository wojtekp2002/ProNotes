const Note = require('./db/models/note')

class NoteActions {
    
    //dodawanie notatki
    async saveNote(req, res) {
        try {
            const title = req.body.title;
            const body = req.body.body;
            const date = req.body.date;

            const note = new Note({title, body, date});

            await note.save();
            res.status(201).json(note);
        } catch (err) {
            console.error(err);
            res.status(422).json({ error: err.message });
        }
    }

    //pobieranie notatek
    async getAllNotes(req, res) {
        try {
            const notes = await Note.find({}).exec();
            console.log(notes);
            res.status(200).json(notes);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    //pobieranie notatki
    async getNote(req, res) {
        try {
            const id = req.params.id;
            const note = await Note.findOne({_id: id}).exec();
            console.log(note)
            res.status(200).json(note);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
    //aktualizowanie notatki
    async updateNote(req, res) {
        try {
            const title = req.body.title;
            const body = req.body.body;
            const date = req.body.date;
            const id = req.params.id;

            const note = await Note.findOne({_id: id}).exec();
            note.title = title;
            note.body = body;
            note.date = date;
            await note.save();
            res.status(201).json(note);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    //usuwanie notatki
    async deleteNote(req, res) {
        try {
            const id = req.params.id;
            await Note.deleteOne({_id: id});
            res.sendStatus(204);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

module.exports = new NoteActions();