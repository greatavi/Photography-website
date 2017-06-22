/**
 * Created by z on 6/13/17.
 */
var express = require('express');
var router = express.Router();

/* GET gallery page */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'Home' });
});

module.exports = router;
