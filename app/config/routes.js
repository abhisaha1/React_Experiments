var React = require('react');
var Main = require('../views/Main');
var Home = require('../views/Home');
var About = require('../views/About');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Route = Router.Route;

module.exports = (
	<Route name="app" path="/" handler={Main}>
		<Route name="about" path="about" handler={About}/>
		<Route name="about/id" path="about/:id" handler={About}/>
		<DefaultRoute name="default" handler={Home} />
	</Route>
);