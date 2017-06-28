var Promise = require('bluebird');
var day_router = require('express').Router();
var Hotel = require('../../models').Hotel;
var Restaurant = require('../../models').Restaurant;
var Activity = require('../../models').Activity;
var Day = require('../../models').Day;

day_router.get('/', function(req, res, next) {
  Day.findAll()
    .then(function(dbDays) {
      res.send({
        templateDays: dbDays
      });
    })
    .catch(next);
});

day_router.get('/:dayNumber', function(req, res, next) {
  Day.findOne({ where: { number: req.params.dayNumber } })
    .then(function(day) {
      res.send({
        templateDay: day
      })
    })
    .catch(next);
});

day_router.delete('/:dayNumber', function(req, res, next) {
  Day.destroy({ where: { number: req.params.dayNumber } })
    .catch(next);
})

day_router.put('/:dayNumber/:type', function(req, res, next) {
  Day.findOne({ where: { number: req.params.dayNumber } })
    .then(foundDay => {
      if (req.params.type === 'hotel') {
        // if there's no hotel yet, add one. Otherwise, replace or delete?
      } else if (req.params.type === 'activity') {
        // get the day id from foundDay and then look up the activity link in dayActivity. Either add or delete a row?
      } else {
        // type is restaurant, so get the day id from foundDay and then look up the restaurant link in dayRestaurant. Either add or delete a row?
      }
      res.send({
        templateDay: day
      })
    })
    .catch(next);
})

day_router.post('/', function(req, res, next) {
  Day.create()
    .then(function(bool) {
      return
    })
    .catch(next);
})

module.exports = day_router;
