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
    res.render("index");
});

app.get('/about', function(req, res){
    res.render("about");
});

app.get('/blog/:id?', function(req, res){
    var id = req.params.id;
    if (id === undefined) {
        res.status(503);
        res.send("Under construction!")
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
app.listen(3000, function(){
    console.log("Frontend server running on port 3000!")
});
