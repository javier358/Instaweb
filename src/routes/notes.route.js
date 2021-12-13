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

const {isAuthenticated} = require('../helpers/auth')

// esto sirve para agregar las notas
router.get('/notes/add',isAuthenticated, renderNoteForm);

router.post('/notes/new-note',isAuthenticated, createNewNote);

//devuele una lista de todas las notas creadas
router.get('/notes',isAuthenticated, renderNotes);

// editar notas
router.get('/notes/edit/:id',isAuthenticated, renderEditForm);

//put es para actualizar algo que ya existe, get obtener, post para crear delete borrar
router.put('/notes/edit/:id',isAuthenticated, updateNotes);

//borrar notas
router.delete('/notes/delete/:id',isAuthenticated, deleteNotes);

module.exports = router