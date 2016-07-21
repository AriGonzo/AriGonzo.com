var express = require('express');
var path = require('path')
var app = express();
var PORT = 8080;

app.use(express.static('client'));

app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"client", "index.html"));
});

app.listen(PORT, function(){
	console.log('listening on port', PORT)
});