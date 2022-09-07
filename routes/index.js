var express = require('express');
var router = express.Router();
var database = require('./users')
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('home');
});

router.get('/post', function (req, res, next) {
  res.render('post')
})

router.get('/review', function (req, res, next) {
  database.find({}, function (err, data) {
    res.render('review', { data: data });

  })
})

router.post("/update/:id", function (req, res, next) {
  var id = req.params.id;
  database.findByIdAndUpdate(id,{
    name: req.body.gamename,
    review: req.body.review,
  
  }, function (err, data) {
    res.redirect("/review");
  });
})



router.get("/update/:id", function (req, res, next) {
  var id = req.params.id;
  database.find({}, function (err, data) {
    res.render('update', { data: data, id: id });

  }) 
})




router.post('/send', function (req, res, next) {
  database.create({
    name: req.body.gamename,
    review: req.body.review
  })
    .then(() => {
      res.redirect("/review")
    }
    )
});

router.get("/delete/:id", function (req, res, next) {
  var id = req.params.id;
  database.findByIdAndRemove(id, function (err) {

    if (err) {
      console.log("Error");
    }

    res.redirect("/review")


  })

})




module.exports = router;
