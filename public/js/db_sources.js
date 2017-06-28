$(function () {
  // load number of results
  var hotels, restaurants, activities;
  $.ajax({
    method: 'GET',
    url: '/routes/api/options'
  })
  .then(function (responseData) {
    // const actualNumber = responseData.length;
    // $('#num-survery-results').text(actualNumber);
    hotels = responseData.templateHotels;
    restaurants = responseData.templateRestaurants;
    activities = responseData.templateActivities;
    console.log("hotels: " +hotels);
    console.log(responseData.length);
  })
  .catch(alert);
});

