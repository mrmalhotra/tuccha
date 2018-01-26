var mongoose = require('mongoose');
var randomString = require('randomstring');

var LinkSchema = mongoose.Schema({
    url:{type:String, required:true},
    shortenUrl:{
        type:String,
        default: randomString.generate({length:5,charset:'alphanumeric'}),
        required:true,
    },
    sessionID: {type:String,default:''}
});

module.exports= mongoose.model('Link',LinkSchema);