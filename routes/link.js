var express = require('express');
var router = express.Router();
var Link = require('../models/links');

/* GET users listing. */
router.post('/getshorturl', function(req, res) {
  console.log('got url in route ',req.body);
  var shortLink = new Link();
  shortLink.url = req.body.url;
  shortLink.save(function (err,data) {
      if(err){
        console.log('error occurred ',err)
          res.send({success:false, url:req.body.url});
      }else {

        console.log('url saved ',data)
          res.send({success:false, url:data});
      }
  })
});

module.exports = router;
