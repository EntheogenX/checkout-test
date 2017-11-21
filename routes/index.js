var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //const cookieJwt = req.cookies.jwt;

    res.render('index', { title: 'Checkout' });
});

module.exports = router;
