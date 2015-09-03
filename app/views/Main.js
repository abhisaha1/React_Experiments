var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var About = require('../views/About');

var Nav = React.createClass({

	componentDidMount: function() {
		
	},
	render: function() {

		return (

		    <nav className="navbar navbar-inverse navbar-fixed-top topnav" role="navigation">
		        <div className="container topnav">
		            <div className="navbar-header">
		                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		                    <span className="sr-only">Toggle navigation</span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                </button>
		                <a className="navbar-brand topnav" href="#">Start Bootstrap</a>
		            </div>
		            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		                <ul className="nav navbar-nav navbar-right">
		                    <li>
		                    	<Link to="about" >About</Link>
		                    </li>
		                    <li>
		                        <a href="#services">Projects</a>
		                    </li>
		                    <li>
		                        <a href="#contact">Contact Me</a>
		                    </li>
		                </ul>
		            </div>
		        </div>
		    </nav>
		)

	}

});

var Footer = React.createClass({

	render: function() {

		return (
			<footer>
		        <div className="container">
		            <div className="row">
		                <div className="col-lg-12">
		                    <ul className="list-inline">
		                        <li>
		                            <a href="#">Home</a>
		                        </li>
		                        <li className="footer-menu-divider">&sdot;</li>
		                        <li>
		                            <a href="#about">About</a>
		                        </li>
		                        <li className="footer-menu-divider">&sdot;</li>
		                        <li>
		                            <a href="#services">Services</a>
		                        </li>
		                        <li className="footer-menu-divider">&sdot;</li>
		                        <li>
		                            <a href="#contact">Contact</a>
		                        </li>
		                    </ul>
		                    <p className="copyright text-muted small">Copyright &copy; Your Company 2014. All Rights Reserved</p>
		                </div>
		            </div>
		        </div>
		    </footer>
		)

	}
})

var Main = React.createClass({

	render: function() {

		return (
			<div>
				<Nav />
	    		<RouteHandler />
	    		<Footer />
		    </div>

		)
	}

});

module.exports = Main;