const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'user',
    passwordField: 'password'
}, async (user, password, done ) => {

    //confirmar si existe el correo del usuario 
const user = await User.findOne({email})
if (!user){
    return done(null, false, {message: 'El correo no está registrado'});
    } else {
        //el usuario coincide
        const match = await user.matchPassword(password);
        if (match) {
            return done(null, user);
        } else {
            return done(null, false, {message: 'Contraseña incorrecta'})
        }
    }
}));

passport.serializeUser((user, done); => {
    done(null, user.id);
});

passport.deserializeUser((user, done); => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});