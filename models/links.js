var mongoose = require('mongoose');
var randomString = require('randomstring');

var LinkSchema = mongoose.Schema({
    url:{type:String, required:true},
    shortenUrl:{
        type:String,
        default: randomString.generate(),
        required:true
    }
});

module.exports= mongoose.model('Link',LinkSchema);