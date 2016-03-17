// setting up external 3rd party libraries 

var express = require('express');
//var bodyParser = require('body-parser');
//var csrf = require('csurf');
var mongoose = require('mongoose');
var session = require('client-sessions');
var passport = require('passport');
var flash    = require('connect-flash');

//initialising Express
var app 	=	express();
// Configuring Express port
var port     = process.env.PORT || 3005;

// initialising MongoDb connection URL
var db_connection_url = require('./config/db.js');
mongoose.connect(db_connection_url.url);

require('./config/passport')(passport); 

app.configure(function() {

	// set up our express application
	app.use(express.logger('dev')); // log every request to the console
	app.use(express.cookieParser()); // read cookies (needed for auth)
	app.use(express.bodyParser()); // get information from html forms

	app.set('view engine', 'ejs'); // set up ejs for templating

	// required for passport
	app.use(express.session({ secret: 'teststring' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session

});

require('./app/routes.js')(app, passport);

app.listen(port);
console.log("Listening on port "  + port + " . . . ");