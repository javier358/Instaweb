const { Router } = require('express');
const res = require('express/lib/response');
const router = Router();
const { renderIndex, renderNosotros } = require('../controllers/index.controller')

router.get('/', renderIndex );

router.get('/nosotros', renderNosotros);

router.get('/webhosting', (req, res) => {
    res.render('webhosting')
});

router.get('/cloudhosting', (req, res) => {
    res.render('cloudhosting')
});

router.get('/vpshosting', (req, res) => {
    res.render('vpshosting')
});

router.get('/wordpresshosting', (req, res) => {
    res.render('wordpresshosting')
});

router.get('/dedicadohosting', (req, res) => {
    res.render('dedicadohosting')
});

module.exports = router;