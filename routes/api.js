const express = require('express');
const router = express.Router();

const noteActions = require('../actions/noteActions');
const authActions = require('../actions/authActions');

//endpointy:
//pobieranie notatek wszytskich
router.get('/notes', noteActions.getAllNotes)
//pobieranie konkretnej notatki
router.get('/notes/:id', noteActions.getNote)
//zapisywanie notatek
router.post('/notes', noteActions.saveNote)
//edytowanie notatek 
router.put('/notes/:id', noteActions.updateNote)
//usuwanie notatek
router.delete('/notes/:id', noteActions.deleteNote)
//login
router.get('/login', authActions.render)
//
router.post('/login', authActions.login)
//rejestracja
router.get('/signup', authActions.signup)
//
router.post('/signup', authActions.signup2)


module.exports = router;
