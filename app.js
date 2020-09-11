
const express = require('express');
const bodyParser = require('body-parser');
var authenticate= require('./authenticate/controller');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

authenticate(app);

app.listen(3000);