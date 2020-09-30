import React, { Component } from 'react';
import axios from 'axios';
import SinglePost from './SinglePost';

export class Home extends Component {
	state = {
		posts: []
	};

	componentWillMount() {
		const url = 'https://jsonplaceholder.typicode.com/posts';
		axios.get(url).then((res) => {
			this.setState({ posts: res.data.slice(0, 5) });
		});
	}
	render() {
		const { posts } = this.state;
		const postList = posts.length ? (
			posts.map((post) => {
				return <SinglePost post={post} />;
			})
		) : (
			<div className='center'>Loading</div>
		);

		return (
			<div className='container home '>
				<h4 className='center'>home</h4>

				{postList}
			</div>
		);
	}
}

export default Home;
