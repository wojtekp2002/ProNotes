const express = require('express');
const router = express.Router();

const noteActions = require('../actions/notes');

router.post('/', noteActions.saveNote)


module.exports = router;
