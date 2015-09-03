var React = require('react');

var Loader = React.createClass({

	render: function() {
		return (
			<img src="https://d13yacurqjgara.cloudfront.net/users/12755/screenshots/1037374/hex-loader2.gif" />
		)
	}

})

var Contact = React.createClass({

	render: function() {

		return (
			<div>
				<a  name="contact"></a>
			    <div className="banner">

			        <div className="container">

			            <div className="row">
			                <div className="col-lg-6">
			                    <h2>Connect to Start Bootstrap:</h2>
			                </div>
			                <div className="col-lg-6">
			                    <ul className="list-inline banner-social-buttons">
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
		)
	}

})

var User = React.createClass({

	render: function() {
		return (
			<h2>{this.props.firstName}</h2>
		)
	}
})

var About = React.createClass({

	fetchData: function(id,callback) {

		
		jQuery.getJSON("http://ajaxtown.com/playground/data.php", function(data) {

			var data = (id >= 0)?[data[id]]:data; 
			callback(data);
			

		});

	},
	getInitialState: function() {

		return {
			data: null
		};

	},
	componentWillReceiveProps: function(props) {
		var params = props.params;
		var id = (params.id) ? params.id : -1;
		var obj = this;

		this.fetchData(id, function(data){
				obj.setState({
					data: data
				});
			});
	},
	componentDidMount: function() {
        var obj = this;
        var params = this.props.params;
		var id = (params.id) ? params.id : -1;
		this.fetchData(id, function(data){
				obj.setState({
					data: data
				});
			});

	},
	render: function() {

		var results = this.state.data;
		
		if(results == null) {
			return (
				<Loader />
			)
		}
		return (
			<div>
				<Contact />

			   {
				   	results.map(function(result) {
			   			return <User firstName={result.firstName} />;
		   			})
		   		}
		    </div>
		)
	}

});

module.exports = About;