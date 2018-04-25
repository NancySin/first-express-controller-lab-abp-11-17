'use strict' ;

var express = require('express')
var app = express()
const SiteController = require('./controllers/SiteController.js')


app.get("/", SiteController.Index)

module.exports = app

app.get("/about", SiteController.About)

app.get("/contact", SiteController.Contact)


module.exports = app
