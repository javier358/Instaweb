const notesCtrl = {};

const Note = require('../models/Notes');

notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};


notesCtrl.createNewNote = async (req, res) => {
    const {title, description} = req.body
    const newNote = new Note({title, description});
    await newNote.save();
    res.send('new note')
};

notesCtrl.renderNotes = (req, res) => {
    res.send('render notes')
};

notesCtrl.renderEditForm = (req, res) => {
    res.send('render editar formulario')
}

notesCtrl.updateNotes = (req, res) => {
    res.send(' update note')
}

notesCtrl.deleteNotes = (req, res) => {
    res.send('borrar nota')
}

module.exports = notesCtrl;