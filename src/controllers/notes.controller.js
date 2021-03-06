const notesCtrl = {};

const Note = require('../models/Notes');

notesCtrl.renderNoteForm = (req, res) => {
    //
    res.render('notes/new-note');
};


notesCtrl.createNewNote = async (req, res) => {
    const {title, description} = req.body
    const newNote = new Note({title , description});
    console.log(req.user);
    newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Ticket creado satisfactoriamente')
    res.redirect('/notes')
};

notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find({user: req.user.id}).lean();
    res.render('notes/all-notes', { notes });
};

notesCtrl.renderEditForm = async (req, res) => {
   const notes = await Note.findById(req.params._id).lean();
   console.log(notes)
    res.render('notes/edit-note', { notes });
};

notesCtrl.updateNotes = async (req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description});
    req.flash('success_msg', 'Ticket actualizado satisfactoriamente')
    res.redirect('/notes')
};

notesCtrl.deleteNotes = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Ticket eliminado satisfactoriamente')
    res.redirect('/notes')
};

module.exports = notesCtrl;