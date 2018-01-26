var express = require('express');
var router = express.Router();
var Link = require('../models/links');
var randomString = require('randomstring');

/* GET users listing. */
router.post('/getshorturl', function (req, res) {
    console.log('got url in route ', req.body);
    var shortLink = new Link();
    shortLink.url = req.body.url;
    shortLink.sessionID = req.body.userSession;
    shortLink.save(function (err, data) {
        if (err) {
            console.log('error occurred ', err)
            res.send({success: false, url: req.body.url});
        } else {

            console.log('url saved ', data)
            res.send({success: true, url: data});
        }
    })
});


router.get('/getSessionId', (req, res) => {
    res.send({sessionId: randomString.generate()});
})

router.post('/getAllUserUrl', async (req, res) => {
    console.log('in get all user url node ', req.body);
    if (req.body.sessionId !== undefined) {
        let shortUrls = await Link.find({sessionID: req.body.sessionId}).exec();
        console.log('got the session from db ', shortUrls)
        if (shortUrls.length === 0 || !shortUrls) {
            console.log('false baby')
            res.send({success: false, shortUrl: []})
        } else {
            console.log('true')
            res.send({success: true, shortUrl: shortUrls})
        }
    }
})
module.exports = router;
