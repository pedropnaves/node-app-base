'use strict';

var express = require('express');
var helmet = require('helmet');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/api');

var app = express();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

module.exports = app;
