var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var locations = {
    locations: 2,
    shop : [
      {
        shop_name : "Saibaba Colony",
        location_name : "Coimbatore",
        location_id : "001",
        address_1 : "6/1, SRP Nagar",
        address_2 : "Saibaba Colony, Coimbatore 641011",
        site_url : "http://cakebee.in"
      },
      {
        shop_name : "Sitra",
        location_name : "Coimbatore",
        location_id : "001",
        address_1 : "Near Kanappa Hotel",
        address_2 : "Sitra, Coimbatore 641004",
        site_url : "http://cakebee.in"
      }      
    ]
  }

  res.status(200).send(locations);
});

module.exports = router;
