var mongoose = require('mongoose');

var LinkSchema = mongoose.Schema({
    url:{type:String, required:true},
    shortenUrl:{type:String,required:true}
});

module.exports= mongoose.model('Link',LinkSchema);



LinkSchema.pre('save',(next)=>{
this.shortenUrl = require('randomstring').generate({length: 5,charset: 'alphabetic'});
next();
})