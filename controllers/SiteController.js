<<<<<<< HEAD
'use strict';

const SiteController = {};

SiteController.Index = function(req, resp) {
  resp.render("site/index")
}

SiteController.About = function(req, resp) {
  resp.render("site/about")
}

SiteController.Contact = function(req, resp) {
  resp.render("site/contact")
=======
const SiteController = {};

SiteController.Index = function(req, resp){
  resp.render('site/index')
}

SiteController.About = function(req, resp){
  resp.render('site/about')
}

SiteController.Contact = function(req, resp){
  resp.render('site/contact')
>>>>>>> 96fb0453298fdb5ff7c4b80ab3210561c5b077ae
}

module.exports = SiteController
