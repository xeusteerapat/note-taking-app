const { Note } = require('../models');

const createNote = async (req, res) => {
  const { title, text } = req.body;

  const note = await Note.create({
    title,
    text,
    user_id: req.user.id,
  });

  res.status(201).send(note);
};

const getAllNotes = async (req, res) => {
  const allNotes = await Note.findAll({ where: { user_id: req.user.id } });

  res.status(200).send(allNotes);
};

const getSingleNote = async (req, res) => {
  const targetId = req.params.id;
  const note = await Note.findOne({
    where: {
      id: targetId,
      user_id: req.user.id,
    },
  });

  if (!note) {
    res.status(404).send('Note not found');
  }

  res.status(200).send(note);
};

const updateNote = async (req, res) => {
  const targetId = req.params.id;
  const { title, text } = req.body;

  const targetNote = await Note.findOne({
    where: {
      id: targetId,
      user_id: req.user.id,
    },
  });

  if (!targetNote) {
    res.status(404).send({ message: 'Note not found.' });
  } else {
    await targetNote.update({
      title,
      text,
    });
    res.status(200).send({ message: 'Note has been updated.' });
  }
};

const deleteNote = async (req, res) => {
  const targetId = req.params.id;

  const targetNote = await Note.findOne({
    where: {
      id: targetId,
      user_id: req.user.id,
    },
  });

  if (!targetNote) {
    res.status(404).send({ message: 'Note not found.' });
  } else {
    await targetNote.destroy();
    res.status(200).send({ message: 'Note has been deleted.' });
  }
};

module.exports = {
  createNote,
  getAllNotes,
  getSingleNote,
  updateNote,
  deleteNote,
};
