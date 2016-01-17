'use strict';


var express = require('express'),
    i18n = require('i18n'),
    marked = require('marked'),
    posts = require('../content/posts.json'),
    app = express();

/**
 * Static assets
 */
app.use('/static', express.static( __dirname + '/public'));

/**
 * Templating engine
 */
app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

/**
 * Localization
 */
i18n.configure({
    locales:['en', 'el', 'es'],
    directory: __dirname + '/locales'
});

/**
 * Routes
 */
app.get('/', function(req, res){
    res.locals.title = "Empowering independent volunteers";
    res.render("index", {
        url : req.originalUrl
    });
});

app.get('/about', function(req, res){
    res.locals.title = "About";
    res.render("about", {
        url : req.originalUrl
    });
});

app.get('/whyxfund', function(req, res){
    res.locals.title = "Why X Fund";
    res.render("whyxfund", {
        url : req.originalUrl
    });
});

app.get('/stories', function(req, res){
    res.locals.title = "Stories";
    res.render("stories", {
        url : req.originalUrl
    });
});

app.get('/contact', function(req, res){
    res.locals.title = "Contact us";
    res.render("contact", {
        url : req.originalUrl
    });
});

app.get('/transparency', function(req, res){
    res.locals.title = "Transparency";
    res.render("transparency", {
        url : req.originalUrl
    });
});

app.get('/toolkit', function(req, res){
    res.locals.title = "Toolkit";
    res.render("toolkit", {
        url : req.originalUrl
    });
});

app.get('/blog/:id?', function(req, res){
    var id = req.params.id;
    if (id === undefined) {
        res.locals.title = "Blog";
        res.render("todo", {
        url : req.originalUrl
    });
    } else {
        var post = posts[id] || {};
        res.render('post',
           {
                post: post
            }
        );
    }
});

/**
 * Server
 */
app.listen(process.env.PORT || 3000, function(){
    console.log("Frontend server running!")
});
