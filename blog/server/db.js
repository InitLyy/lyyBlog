

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log("successs");
    
});

const articlesSchema = new mongoose.Schema({
    title:String,
    date:String,
    target:String,
    content:String,
});
const Models = {
    Article: mongoose.model('article',articlesSchema),
}

module.exports = Models;