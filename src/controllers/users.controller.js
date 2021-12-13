const usersCtrl = {};

const passport = require('passport');
const User = require('../models/User')

usersCtrl.renderSignUpform = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = async (req, res) => {
    const errors = [];
    const { user, email, password, confirm_password } = req.body;
    if (password != confirm_password) {
        errors.push({text: 'Contraseñas no coinciden'});

    }
    if (password.length < 4) {
        errors.push({text: 'La contraseña debe tener más de 4 caracteres'});
    }
    if (errors.length > 0) {
        res.render('users/signup', {
            errors,
            user,
            email,
        });
    }else {
       const emailUser = await User.findOne({email});
       if (emailUser){
           req.flash('error_msg', ' Este correo electronico ya está en uso');
           res.redirect('/users/signup');
       } else {
          const newUser = new User({user, email, password});
          newUser.password = await newUser.encryptPassword(password)
          await newUser.save();
          req.flash('success_msg', 'Se ha registrado satisfacoriamente');
          res.redirect('/users/signin');
       }
    }
    
};

usersCtrl.renderSignInform = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/notes',
    failureFlash: true
});


usersCtrl.logout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'Su secion se a cerrado');
    res.redirect('/users/signin')
}

module.exports = usersCtrl;