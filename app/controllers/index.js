module.exports.home = function (req, res, next) {
    res.render('index',
        {
            title: 'COMP229',
            username: 'Ayomide'
        }
    );
}

module.exports.about = function (req, res, next) {
    res.render('index',
        {
            title: 'About',
            username: 'Julio'
        }
    );
}