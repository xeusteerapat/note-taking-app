const express = require('express');
const passport = require('passport');
const router = express.Router();

const {
  createNote,
  getAllNotes,
  getSingleNote,
  updateNote,
  deleteNote
} = require('../controllers/noteController');

const auth = passport.authenticate('jwt', { session: false });

router.get('/', auth, getAllNotes);
router.get('/:id', auth, getSingleNote);
router.post('/', auth, createNote);
router.put('/:id', auth, updateNote);
router.delete('/:id', auth, deleteNote);

module.exports = router;
