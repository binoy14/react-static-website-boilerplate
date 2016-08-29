import React, {Component} from "react";
import {Link} from "react-router";

import "../../scss/footer.scss";

export default class App extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
							<button 
								className="navbar-toggle collapsed" 
								data-toggle="collapse" 
								data-target="#navbar-collapse-1" 
								aria-expanded="false">
									<span className="sr-only">Toggle navigation</span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
							</button>
							<Link to="/" className="navbar-brand">
								React Website
							</Link>
						</div>

						<div className="collapse navbar-collapse" id="navbar-collapse-1">
							<div className="nav navbar-nav">
								<ul className="nav navbar-nav">
									<li><Link to="/about">About</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
				{this.props.children}
				<footer className="footer">
					<div className="container">
						<p className="text-muted">Copyright © 2016</p>
					</div>
				</footer>
			</div>
		);
	}
}
