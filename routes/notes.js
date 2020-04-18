const express = require('express');
const passport = require('passport');
const router = express.Router();

const {
  createNote,
  getAllNotes,
  updateNote,
  deleteNote
} = require('../controllers/noteController');

const auth = passport.authenticate('jwt', { session: false });

router.get('/', auth, getAllNotes);
router.post('/', auth, createNote);
router.put('/:id', auth, updateNote);
router.delete('/:id', auth, deleteNote);

module.exports = router;
