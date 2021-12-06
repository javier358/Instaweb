const { Router } = require('express')
const router = Router();
const { renderIndex, renderNosotros } = require('../controllers/index.controller')

router.get('/', renderIndex );

router.get('/nosotros', renderNosotros);


module.exports = router;