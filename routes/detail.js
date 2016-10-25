var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:location', function(req, res, next) {
  var location_id = req.params.location;
  if (location_id != "001") {
      res.status(400).send({"error" : "Incorrect location id"});
      return;
  }

  var menu_list = [
      {
          menu_name : "Cakes",
          menu_id : "1",
          menu_tagline : "For all your celebrations"
      },
      {
          menu_name : "Breads",
          menu_id : "2",
          menu_tagline : "16+ varieties to delight you every morning"
      },
      {
          menu_name : "Pastries",
          menu_id : "3",
          menu_tagline : "Sweet baked goods to enchant you"
      },
      {
          menu_name : "Cookies",
          menu_id : "4",
          menu_tagline : "Your anytime anywhere snack"
      },
  ]

  var menu_detail = [
      {
          "1" : [
              {
                  today : [
                      {
                          item_name : "Black Forest Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_7501-Edit_1024x1024.jpg?v=1448990203",
                          item_id : "XP01",
                          item_description : "Named after the speciality liqueur from Schwarzwald region in Germany, it consists of baked layers of chocolate cake with whipped cream and delicious cherries in between each layer. Ideal for all occasions.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/authentic-black-forest-cake?variant=7117979140"
                      },
                      {
                          item_name : "Classic Butterscotch Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5856-Edit_1024x1024.jpg?v=1446956810",
                          item_id : "XP01",
                          item_description : "An old favorite, loved by all.This cake is layered with smooth caramel sponge cake slices soaked with sweet butterscotch nectar and drizzled with toffee sauce. Ideal for family jaunts.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/classic-butterscotch-cake?variant=7118212996"
                      },
                      {
                          item_name : "Creamy Vanilla Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5842_1024x1024.jpg?v=1466073377",
                          item_id : "XP01",
                          item_description : "Celebrate with your friends and family with mouth watering layers of cake topped with natural vanilla frosting and garnish. A favorite of everyone in the family. Ideal for family gatherings and kids birthdays.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/creamy-vanilla-cake?variant=7118348932"
                      },
                      {
                          item_name : "White Forest Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5827_1024x1024.jpg?v=1466073623",
                          item_id : "XP01",
                          item_description : "Enjoy classic vanilla taste in this dream cake perfectly paired with whipped cream and mouth watering cherries. Ideal for all parties and get togethers.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/white-forest-cake?variant=7127533252"
                      }
                  ],
                  tomorrow : [
                      {
                          item_name : "Black Forest Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_7501-Edit_1024x1024.jpg?v=1448990203",
                          item_id : "XP01",
                          item_description : "Named after the speciality liqueur from Schwarzwald region in Germany, it consists of baked layers of chocolate cake with whipped cream and delicious cherries in between each layer. Ideal for all occasions.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/authentic-black-forest-cake?variant=7117979140"
                      },
                      {
                          item_name : "Classic Butterscotch Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5856-Edit_1024x1024.jpg?v=1446956810",
                          item_id : "XP01",
                          item_description : "An old favorite, loved by all.This cake is layered with smooth caramel sponge cake slices soaked with sweet butterscotch nectar and drizzled with toffee sauce. Ideal for family jaunts.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/classic-butterscotch-cake?variant=7118212996"
                      },
                      {
                          item_name : "Creamy Vanilla Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5842_1024x1024.jpg?v=1466073377",
                          item_id : "XP01",
                          item_description : "Celebrate with your friends and family with mouth watering layers of cake topped with natural vanilla frosting and garnish. A favorite of everyone in the family. Ideal for family gatherings and kids birthdays.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/creamy-vanilla-cake?variant=7118348932"
                      },
                      {
                          item_name : "White Forest Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5827_1024x1024.jpg?v=1466073623",
                          item_id : "XP01",
                          item_description : "Enjoy classic vanilla taste in this dream cake perfectly paired with whipped cream and mouth watering cherries. Ideal for all parties and get togethers.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/white-forest-cake?variant=7127533252"
                      }
                  ]
              }
          ],
          "2" : [
              {
                  today : [
                      {
                          item_name : "Black Forest Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_7501-Edit_1024x1024.jpg?v=1448990203",
                          item_id : "XP01",
                          item_description : "Named after the speciality liqueur from Schwarzwald region in Germany, it consists of baked layers of chocolate cake with whipped cream and delicious cherries in between each layer. Ideal for all occasions.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/authentic-black-forest-cake?variant=7117979140"
                      },
                      {
                          item_name : "Classic Butterscotch Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5856-Edit_1024x1024.jpg?v=1446956810",
                          item_id : "XP01",
                          item_description : "An old favorite, loved by all.This cake is layered with smooth caramel sponge cake slices soaked with sweet butterscotch nectar and drizzled with toffee sauce. Ideal for family jaunts.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/classic-butterscotch-cake?variant=7118212996"
                      },
                      {
                          item_name : "Creamy Vanilla Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5842_1024x1024.jpg?v=1466073377",
                          item_id : "XP01",
                          item_description : "Celebrate with your friends and family with mouth watering layers of cake topped with natural vanilla frosting and garnish. A favorite of everyone in the family. Ideal for family gatherings and kids birthdays.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/creamy-vanilla-cake?variant=7118348932"
                      },
                      {
                          item_name : "White Forest Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5827_1024x1024.jpg?v=1466073623",
                          item_id : "XP01",
                          item_description : "Enjoy classic vanilla taste in this dream cake perfectly paired with whipped cream and mouth watering cherries. Ideal for all parties and get togethers.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/white-forest-cake?variant=7127533252"
                      }
                  ],
                  tomorrow : [
                      {
                          item_name : "Black Forest Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_7501-Edit_1024x1024.jpg?v=1448990203",
                          item_id : "XP01",
                          item_description : "Named after the speciality liqueur from Schwarzwald region in Germany, it consists of baked layers of chocolate cake with whipped cream and delicious cherries in between each layer. Ideal for all occasions.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/authentic-black-forest-cake?variant=7117979140"
                      },
                      {
                          item_name : "Classic Butterscotch Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5856-Edit_1024x1024.jpg?v=1446956810",
                          item_id : "XP01",
                          item_description : "An old favorite, loved by all.This cake is layered with smooth caramel sponge cake slices soaked with sweet butterscotch nectar and drizzled with toffee sauce. Ideal for family jaunts.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/classic-butterscotch-cake?variant=7118212996"
                      },
                      {
                          item_name : "Creamy Vanilla Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5842_1024x1024.jpg?v=1466073377",
                          item_id : "XP01",
                          item_description : "Celebrate with your friends and family with mouth watering layers of cake topped with natural vanilla frosting and garnish. A favorite of everyone in the family. Ideal for family gatherings and kids birthdays.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/creamy-vanilla-cake?variant=7118348932"
                      },
                      {
                          item_name : "White Forest Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5827_1024x1024.jpg?v=1466073623",
                          item_id : "XP01",
                          item_description : "Enjoy classic vanilla taste in this dream cake perfectly paired with whipped cream and mouth watering cherries. Ideal for all parties and get togethers.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/white-forest-cake?variant=7127533252"
                      }
                  ]
              }
          ],"3" : [
              {
                  today : [
                      {
                          item_name : "Black Forest Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_7501-Edit_1024x1024.jpg?v=1448990203",
                          item_id : "XP01",
                          item_description : "Named after the speciality liqueur from Schwarzwald region in Germany, it consists of baked layers of chocolate cake with whipped cream and delicious cherries in between each layer. Ideal for all occasions.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/authentic-black-forest-cake?variant=7117979140"
                      },
                      {
                          item_name : "Classic Butterscotch Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5856-Edit_1024x1024.jpg?v=1446956810",
                          item_id : "XP01",
                          item_description : "An old favorite, loved by all.This cake is layered with smooth caramel sponge cake slices soaked with sweet butterscotch nectar and drizzled with toffee sauce. Ideal for family jaunts.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/classic-butterscotch-cake?variant=7118212996"
                      },
                      {
                          item_name : "Creamy Vanilla Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5842_1024x1024.jpg?v=1466073377",
                          item_id : "XP01",
                          item_description : "Celebrate with your friends and family with mouth watering layers of cake topped with natural vanilla frosting and garnish. A favorite of everyone in the family. Ideal for family gatherings and kids birthdays.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/creamy-vanilla-cake?variant=7118348932"
                      },
                      {
                          item_name : "White Forest Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5827_1024x1024.jpg?v=1466073623",
                          item_id : "XP01",
                          item_description : "Enjoy classic vanilla taste in this dream cake perfectly paired with whipped cream and mouth watering cherries. Ideal for all parties and get togethers.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/white-forest-cake?variant=7127533252"
                      }
                  ],
                  tomorrow : [
                      {
                          item_name : "Black Forest Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_7501-Edit_1024x1024.jpg?v=1448990203",
                          item_id : "XP01",
                          item_description : "Named after the speciality liqueur from Schwarzwald region in Germany, it consists of baked layers of chocolate cake with whipped cream and delicious cherries in between each layer. Ideal for all occasions.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/authentic-black-forest-cake?variant=7117979140"
                      },
                      {
                          item_name : "Classic Butterscotch Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5856-Edit_1024x1024.jpg?v=1446956810",
                          item_id : "XP01",
                          item_description : "An old favorite, loved by all.This cake is layered with smooth caramel sponge cake slices soaked with sweet butterscotch nectar and drizzled with toffee sauce. Ideal for family jaunts.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/classic-butterscotch-cake?variant=7118212996"
                      },
                      {
                          item_name : "Creamy Vanilla Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5842_1024x1024.jpg?v=1466073377",
                          item_id : "XP01",
                          item_description : "Celebrate with your friends and family with mouth watering layers of cake topped with natural vanilla frosting and garnish. A favorite of everyone in the family. Ideal for family gatherings and kids birthdays.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/creamy-vanilla-cake?variant=7118348932"
                      },
                      {
                          item_name : "White Forest Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5827_1024x1024.jpg?v=1466073623",
                          item_id : "XP01",
                          item_description : "Enjoy classic vanilla taste in this dream cake perfectly paired with whipped cream and mouth watering cherries. Ideal for all parties and get togethers.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/white-forest-cake?variant=7127533252"
                      }
                  ]
              }
          ],
          "4" : [
              {
                  today : [
                      {
                          item_name : "Black Forest Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_7501-Edit_1024x1024.jpg?v=1448990203",
                          item_id : "XP01",
                          item_description : "Named after the speciality liqueur from Schwarzwald region in Germany, it consists of baked layers of chocolate cake with whipped cream and delicious cherries in between each layer. Ideal for all occasions.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/authentic-black-forest-cake?variant=7117979140"
                      },
                      {
                          item_name : "Classic Butterscotch Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5856-Edit_1024x1024.jpg?v=1446956810",
                          item_id : "XP01",
                          item_description : "An old favorite, loved by all.This cake is layered with smooth caramel sponge cake slices soaked with sweet butterscotch nectar and drizzled with toffee sauce. Ideal for family jaunts.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/classic-butterscotch-cake?variant=7118212996"
                      },
                      {
                          item_name : "Creamy Vanilla Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5842_1024x1024.jpg?v=1466073377",
                          item_id : "XP01",
                          item_description : "Celebrate with your friends and family with mouth watering layers of cake topped with natural vanilla frosting and garnish. A favorite of everyone in the family. Ideal for family gatherings and kids birthdays.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/creamy-vanilla-cake?variant=7118348932"
                      },
                      {
                          item_name : "White Forest Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5827_1024x1024.jpg?v=1466073623",
                          item_id : "XP01",
                          item_description : "Enjoy classic vanilla taste in this dream cake perfectly paired with whipped cream and mouth watering cherries. Ideal for all parties and get togethers.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/white-forest-cake?variant=7127533252"
                      }
                  ],
                  tomorrow : [
                      {
                          item_name : "Black Forest Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_7501-Edit_1024x1024.jpg?v=1448990203",
                          item_id : "XP01",
                          item_description : "Named after the speciality liqueur from Schwarzwald region in Germany, it consists of baked layers of chocolate cake with whipped cream and delicious cherries in between each layer. Ideal for all occasions.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/authentic-black-forest-cake?variant=7117979140"
                      },
                      {
                          item_name : "Classic Butterscotch Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5856-Edit_1024x1024.jpg?v=1446956810",
                          item_id : "XP01",
                          item_description : "An old favorite, loved by all.This cake is layered with smooth caramel sponge cake slices soaked with sweet butterscotch nectar and drizzled with toffee sauce. Ideal for family jaunts.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/classic-butterscotch-cake?variant=7118212996"
                      },
                      {
                          item_name : "Creamy Vanilla Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5842_1024x1024.jpg?v=1466073377",
                          item_id : "XP01",
                          item_description : "Celebrate with your friends and family with mouth watering layers of cake topped with natural vanilla frosting and garnish. A favorite of everyone in the family. Ideal for family gatherings and kids birthdays.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/creamy-vanilla-cake?variant=7118348932"
                      },
                      {
                          item_name : "White Forest Cake",
                          item_image : "http://cdn.shopify.com/s/files/1/0797/0193/products/750_5827_1024x1024.jpg?v=1466073623",
                          item_id : "XP01",
                          item_description : "Enjoy classic vanilla taste in this dream cake perfectly paired with whipped cream and mouth watering cherries. Ideal for all parties and get togethers.",
                          item_unit : {
                              "0" : "0.5 kg",
                              "1" : "1 kg",
                              "2" : "2 kg",
                              "3" : "3 kg"
                          },
                          item_price : {
                              "0" : "350 Rs",
                              "1" : "600 Rs",
                              "2" : "1200 Rs",
                              "3" : "1800 Rs"                              
                          },
                          item_checkout : "http://www.cakebee.in/collections/bees-xpress/products/white-forest-cake?variant=7127533252"
                      }
                  ]
              }
          ]
      }
  ];

  var whats_cooking = [
      {
          menu_name : "Cakes",
          menu_id : "1",
          menu_image : "https://cdn.shopify.com/s/files/1/0797/0193/files/cake_live.png?16473905687662198390"
      },
      {
          menu_name : "Breads",
          menu_id : "2",
          menu_image : "https://cdn.shopify.com/s/files/1/0797/0193/files/bread_live.png?16473905687662198390"
      },
      {
          menu_name : "Pizzas",
          menu_id : "3",
          menu_image : "https://cdn.shopify.com/s/files/1/0797/0193/files/pizza_live.png?16473905687662198390"
      },
      {
          menu_name : "Snakcs",
          menu_id : "4",
          menu_image : "https://cdn.shopify.com/s/files/1/0797/0193/files/snack_live.png?16473905687662198390"
      }

  ];

  var reviews = [
      {
          review_id : "1",
          author : "Adarsh Ravi",
          comments : " If you're a cake fan, you must try the cakes these guys have. This is like the Walmart for cakes. They've literally every type."
      },
      {
          review_id : "2",
          author : "Gokul Krishna",
          comments : "Cake Bee.. One awesome name for delicious cake delivery.. We ordered 2 kg chocolate truffle cake for my Friends parents 25th anniversary n I must say the cake was yummy.."
      }

  ]

  var details = {
      location_name : "Coimbatore",
      menu_list : menu_list,
      menu_detail : menu_detail,
      whats_cooking : whats_cooking,
      reviews : reviews

  }

  res.status(200).send(details);
});

module.exports = router;
