var Promise = require('bluebird');
var api_router = require('express').Router();
var Hotel = require('../../models').Hotel;
var Restaurant = require('../../models').Restaurant;
var Activity = require('../../models').Activity;
var Day = require('../../models').Day;
var day_router = require('./days');

api_router.use('/days', day_router);

api_router.get('/hotels', function(req, res, next) {
 Hotel.findAll()
  .then(function(dbHotels) {
    res.send({
      templateHotels: dbHotels
    });
  })
  .catch(next);
});

api_router.get('/restaurants', function(req, res, next) {
 Restaurant.findAll()
  .then(function(dbRestaurants) {
    res.send({
      templateRestaurants: dbRestaurants
    });
  })
  .catch(next);
});

api_router.get('/activities', function(req, res, next) {
 Activity.findAll()
  .then(function(dbActivities) {
    res.send({
      templateActivities: dbActivities
    });
  })
  .catch(next);
});



api_router.get('/options', function(req, res, next) {
 Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll(),
    Day.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities, dbDays) {
    res.send({
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities,
      templateDays: dbDays
    });
  })
  .catch(next);
});


module.exports = api_router;
