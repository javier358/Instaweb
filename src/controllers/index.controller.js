const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index')
};

indexCtrl.renderNosotros = (req, res) => {
    res.render('Nosotros')
};

module.exports = indexCtrl;