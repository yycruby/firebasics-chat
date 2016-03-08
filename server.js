var express = require('express');
var serveStatic = require('serve-static');

var PORT = process.env.PORT || 3000;
var app = express();

app.use(serveStatic(__dirname + '/public'));
app.listen(PORT);
