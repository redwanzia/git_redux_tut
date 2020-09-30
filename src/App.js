import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Post from './component/Post';

export class App extends Component {
	render() {
		return (
			<Router>
				<div className='App'>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/about' component={About} />
						<Route path='/contact' component={Contact} />
						<Route path='/:post_id' component={Post} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
