/**
 * Created by chris on 4/24/16.
 */
'use strict';
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var users = require('./api/controllers/usersController');

var app = express();
var rootPath = path.normalize(__dirname);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));

app.get('/api/users/:userName', users.get);

app.get('*', function(req, res) {
    res.sendFile(rootPath + '/app/index.html');
});

var port = 1102;
app.listen(port, function() {
    console.log('Server is listening on port ' + port + '...');
});
