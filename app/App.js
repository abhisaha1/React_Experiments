var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');

Router.run(routes, Router.HistoryLocation, function(Root,state){
	var deepestRouteName = state.routes[state.routes.length - 1].handler;
	console.log(deepestRouteName.displayName);
	React.render(<Root />,document.getElementById('app'));
});