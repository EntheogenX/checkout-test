var express = require('express');
var router = express.Router();

router.get('/',
    function (req, res) {
        //console.log(req.query.userId);
        //if (!req.user.admin) return res.sendStatus(401);
        res.sendStatus(200);
    }
);

module.exports = router;
