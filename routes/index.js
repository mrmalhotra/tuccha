var express = require('express');
var router = express.Router();
const Link = require('../models/links');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:linkId', async (req, res) => {
    console.log('got the link id ',req.params.linkId);
    let redirectLink = await Link.findOne({shortenUrl:req.params.linkId}).exec();
    console.log('got th e obj ',redirectLink);
    if(!redirectLink){
        res.send('Sorry! Wrong Url');
    }
    else{
        console.log('got the else part')
        res.redirect(301,redirectLink.url);
    }
});

module.exports = router;
