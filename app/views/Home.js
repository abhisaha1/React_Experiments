var React = require('react');

var Header = React.createClass({

	componentDidMount: function() {
		vwoInit();
		// $.get('http://ajaxtown.com/playground/data.php', function(data){
			
		// })
	},
	render: function() {

		return (
			<div>
			<a name="about"></a>
		    <div className="intro-header">
		        <div className="container">

		            <div className="row">
		                <div className="col-lg-12">
		                    <div className="intro-message">
		                        <h1 id="title">Landing Page</h1>
		                        <h3>A Template by Start Bootstrap</h3>
		                        <hr className="intro-divider" />
		                        <ul className="list-inline intro-social-buttons">
		                            <li>
		                                <a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
		                            </li>
		                            <li>
		                                <a href="https://github.com/IronSummitMedia/startbootstrap" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
		                            </li>
		                            <li>
		                                <a href="#" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		            </div>

		        </div>
		    </div>
		    </div>
		)

	}
})

var Services = React.createClass({
	render: function() {

		return (
			<div>
				<a  name="services"></a>
			    <div className="content-section-a">

			        <div className="container">
			            <div className="row">
			                <div className="col-lg-5 col-sm-6">
			                    <hr className="section-heading-spacer" />
			                    <div className="clearfix"></div>
			                    <h2 className="section-heading">Death to the Stock Photo:<br/>Special Thanks</h2>
			                    <p className="lead">A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.</p>
			                </div>
			                <div className="col-lg-5 col-lg-offset-2 col-sm-6">
			                    <img className="img-responsive" src="img/ipad.png" alt="" />
			                </div>
			            </div>

			        </div>
		    	</div>
		    </div>
		)

	}
})

var Home = React.createClass({
	componentDidMount: function() {

	},
	render: function() {

		return (
			<div>
				<Header />
				<Services />
			</div>
		)
	}

});

module.exports = Home;