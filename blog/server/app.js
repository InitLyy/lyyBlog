var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');


var api = require('./api');

var app = express();

// 注册users接口
// var users = require('./routes/users');
// app.use('/users', users);


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Credentials",true);
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");//预检请求使用
         res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");//预检请求使用
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// 访问静态资源
app.use(express.static(path.resolve(__dirname, '../dist')));

// 访问单页
app.get('*', function (req, res) {
  var html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
  res.send(html);
});

app.use(api);


// 监听
app.listen(8081, function () {
  console.log('success listen...8081');
});

