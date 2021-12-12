const usersCtrl = {};

usersCtrl.renderSignUpform = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = (req, res) => {
    res.send('singup');
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