var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/memory_palace');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname))); //  "public" off of current is root

app.listen(8080);
console.log('Listening on port 8080');
