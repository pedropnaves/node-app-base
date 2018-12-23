'use strict';

require('dotenv/config');
var express = require('express');
var helmet = require('helmet');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');

var routes = require('./src/routes');

var app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

app.use(process.env.BASE_API, routes);

module.exports = app;
