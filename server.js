var express = require('express');
var serveStatic = require('serve-static');
var livereload = require('livereload');

var PORT = process.env.PORT || 3000;
var app = express();

var livereloadServer = livereload.createServer({
  exts: ['html', 'css', 'js']
});

livereloadServer.watch(__dirname + '/public');

app.use(serveStatic(__dirname + '/public'));
app.listen(PORT);
