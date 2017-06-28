var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var api_router = require('./api');

router.use('/api', api_router);

router.get('/', function(req, res, next) {
  res.render('index')
});

module.exports = router;
