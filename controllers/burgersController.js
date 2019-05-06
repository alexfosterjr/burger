var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
    res.redirect('/index');
});


router.get('/index', function (req, res) {
    burger.selectAll(function (data) {
        var burgerData = { burgers: data };
        console.log(burgerData);
        res.render('index', burgerData);
    });
});


router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function () {    
        res.redirect('/index');
    });
});

// devour
router.post('/burger/devour/:id', function (req, res) {
    burger.updateOne(req.params.id, function () {
        res.redirect('/index');
    });
});

// Export routes
module.exports = router;