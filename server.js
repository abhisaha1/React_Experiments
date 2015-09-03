var express	= require('express');
var path = require('path');
var app = express();
var Router = require('react-router');
var React = require('react');
var Request = require('request');

/*
|--------------------------------------------------------------------------
| All extension of our views are .js, so we mention explicitly this extension
| Default is jsx
|--------------------------------------------------------------------------
*/
require("node-jsx").install({extension: '.js'});


/*
|--------------------------------------------------------------------------
| We set the directory of our views and use the ejs view engine. This is 
| a templating engine. I prefer ejs more than jade. 
|--------------------------------------------------------------------------
*/
app.set('views', path.join(__dirname +  '/app/views'));
app.set('view engine', 'ejs');


/*
|--------------------------------------------------------------------------
| Because we are using ejs engine, the server needs this extension to render
| the index file. But if your index file has an .html extension, 
| then you need this line.
| Install it using
| npm install ejs --save
|--------------------------------------------------------------------------
*/
//app.engine('html', require('ejs').renderFile);


/*
|--------------------------------------------------------------------------
| We need the routes file. Why ? Will explain later
|--------------------------------------------------------------------------
*/
var routes = require('./app/config/routes');


/*
|--------------------------------------------------------------------------
| Our assets will stay at one place. We need to define that place. We can 
| define multiple places. See the commented line below.
|--------------------------------------------------------------------------
*/
app.use('/public',express.static(path.join(__dirname + '/public')));
//app.use('/bower_components',  express.static(__dirname + '/bower_components'));


/*
|--------------------------------------------------------------------------
| Our app is going to check every request and then match each request with
| the routes file. If something matches, it is going to read that 
| file(defined in routes) and put those contents inside our public/index file. 
|
| We have a variable inside this file by the name "html". We are going to 
| replace that variable with the real content.
|--------------------------------------------------------------------------
*/
//http://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually
app.use(function(req, res, next) {

	if(req.url.indexOf('.') <= 0) {
		Router.run(routes,req.url,function(Handler, state) {
			var ele = React.createElement(Handler);
			var html = React.renderToString(ele);
			var deepestRouteName = state.routes[state.routes.length - 1].handler;
			console.log(deepestRouteName.displayName);
			/*
			|---------------------------------------------------------------------
			| We have defined our views dir above. It is going to search index.ejs
			| in that dir. But it doesnt exist.
			| We need to explicitly, mention the abosolute path of our index.
			|---------------------------------------------------------------------
			*/
			//res.render('index', {html: html}); ---> wont work
			//Request('http://ajaxtown.com/playground/data.php', function (error, response, body) {
			  //if (!error && response.statusCode == 200) {
			    //var info = JSON.parse(body);
			    
				res.render(path.join(__dirname +  '/public/index'), {html: html});
			    //obj.props.handleClick(info[1].firstName);
			  //}
			//});
		});
	}

	next();

});


/*
|--------------------------------------------------------------------------
| Kick start the server. Brrmmm Brrmmm
|--------------------------------------------------------------------------
*/
app.listen(3000, function () {
	var host = "localhost";//server.address().address;
	var port = 3000;//server.address().port;

	console.log('✅  Example app listening at http://%s:%s', host, port);
});