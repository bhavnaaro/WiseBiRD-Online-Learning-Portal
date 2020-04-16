import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './CustomNavbar';
import Cards from './Cards';
import Footer from './Footer';
import Instructor from './Instructor';
import About from './About';
import Home from './Home';
import CoursePage from './CoursePage';


class App extends Component {
	render() {
		return (
			<Router>
			
				<div>
					<Navbar />
					<Route exact path="/" component={Home} />
					<Route path="/Instructor" component={Instructor} />
					<Route path="/About" component={About} />
					<Route path="/Courses" component={Cards} />
					<Route path="/Courses/:coursename?" component={CoursePage} />
					<Footer />
					
				</div>
			</Router>
			
		);
	}
}

export default App;
