var mongoose = require('mongoose');
var randomString = require('randomstring');

var LinkSchema = mongoose.Schema({
    url:{type:String, required:true},
    shortenUrl:{
        type:String,
        required:true,
    },
    sessionID: {type:String,default:''}
});

module.exports= mongoose.model('Link',LinkSchema);