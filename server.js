var express = require('express');
var app = express();

app.use(express.static(__dirname + '/www'));

app.listen(80, function(){
  console.log("Dev sucks eggs");
});
