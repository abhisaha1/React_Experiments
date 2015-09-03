var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');
//var RoutesAction = Router.RoutesAction;

// document.addEventListener('DOMContentLoaded', function() {
//     var HistoryJsLocation = require('react-router-historyjs-location');
//     Router.run(routes, HistoryJsLocation, function (Handler,state) {
//         React.render(<Handler/>, document.body);
//     });
// });


Router.run(routes, Router.HistoryLocation, function(Root,state){

	var deepestRouteName = state.routes[state.routes.length - 1].handler;
	console.log(deepestRouteName.displayName);
	React.render(<Root />,document.getElementById('app'));
});