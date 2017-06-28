var Promise = require('bluebird');
var day_router = require('express').Router();
var Hotel = require('../../models').Hotel;
var Restaurant = require('../../models').Restaurant;
var Activity = require('../../models').Activity;
var Day = require('../../models').Day;


day_router.get('/days', function(req, res, next) {
 Day.findAll()
  .then(function(dbDays) {
    res.send({
      templateDays: dbDays
    });
  })
  .catch(next);
});

day_router.get('/days/:dayNumber', function (req, res, next){
  Day.findOne({where: {number: req.params.dayNumber}})
  .then(function(day) {
    res.send({
      templateDay: day
    })
  })
});

day_router.delete('/days/:dayNumber', function (req, res, next){
  Day.destroy({where: {number: req.params.dayNumber}});
})

day_router.post('/days', function (req, res, next){
  Day.create()
  .then(function(bool){return });
})

module.exports = day_router;
