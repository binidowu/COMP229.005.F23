var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users');

/* GET users listing. */

router.get('/', usersController.users);

router.get('/profile', usersController.profile);

// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
