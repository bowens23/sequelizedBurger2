var db = require("../models");

var express = require("express");
var burger = require("../models/burger.js")
var router = express.Router();




router.get('/', function (req, res) { 
     db.burger.findAll({}) 
         .then(function (data) { 
             res.render("index", { burger: data });
         }); 
          //return res.redirect("/");
 }); 



  router.post("/", function(req, res) {

    console.log(req.body.this_doesnot_matter);
    db.burger.create({
      burger_name: req.body.burger_name
    })
    return res.redirect("/");
  });


router.put("/:id", function(req, res) {
  console.log (req.body.id)
  db.burger.update({devoured: req.body.devoured}, 
  {where: {id : req.body.id}})
    return res.redirect("/");
  })

  

module.exports = router;

//here i need to require the models folder.  make sure there is an index in the models folder.  note - all index files look the same for sequeleize.

//first it starts with handlebars.
//next you go to controller looks for path name.handelbars to burgers to controler (based on path name)

//req.body.burger, 