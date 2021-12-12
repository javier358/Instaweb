const { Router } = require('express');
const router = Router();

const { renderSignUpform, renderSignInform, signup, signin, logout } = require('../controllers/users.controller')

router.get('/users/signup', renderSignUpform);

router.post('/users/signup', signup);

router.get('/users/signin', renderSignInform);

router.post('/users/signin', signin);

router.get('/users/logout', logout);

module.exports = router;