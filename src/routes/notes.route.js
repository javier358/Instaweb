const {
    Router
} = require('express')
const router = Router()

const {
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNotes,
    deleteNotes
} = require('../controllers/notes.controller');

// esto sirve para agregar las notas
router.get('/notes/add', renderNoteForm);

router.post('/notes/new-note', createNewNote);

//devuele una lista de todas las notas creadas
router.get('/notes', renderNotes);

// editar notas
router.get('/notes/edit/:id', renderEditForm);

//put es para actualizar algo que ya existe, get obtener, post para crear delete borrar
router.put('/notes/edit/:id', updateNotes);

//borrar notas
router.delete('/notes/delete/:id', deleteNotes);

module.exports = router