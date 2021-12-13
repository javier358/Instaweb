const usersCtrl = {};

const User = require('../models/User')

usersCtrl.renderSignUpform = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = (req, res) => {
    const errors = []
    const { usuario, email, contrasena, confirm_contrasena  } = req.body;
    if (contrasena != confirm_contrasena) {
        errors.push({text: 'Contraseñas no coinciden'});

    }
    if (contrasena.length > 4) {
        errors.push({text: 'La contraseña debe tener más de 4 caracteres'})
    }
    if (errors.length > 0) {
        res.render('users/signup', {
            errors,
            usuario,
            email,
        })
    }else {
        
    }
    
};

usersCtrl.renderSignInform = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = (req, res) => {
    res.send('signin');
};

usersCtrl.logout = (req, res) => {
    res.send('logout');
}

module.exports = usersCtrl;