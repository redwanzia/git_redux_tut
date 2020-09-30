import React, { Component } from 'react';
import axios from 'axios';

export class Post extends Component {
	state = {
		post: null
	};
	componentDidMount() {
		let id = this.props.match.params.post_id;
		const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
		axios.get(url).then((res) => {
			this.setState({
				post: res.data
			});
		});
	}
	render() {
		const post = this.state.post ? (
			<div className='post'>
				<h4 className='center'>{this.state.post.title}</h4>
				<p>{this.state.post.body}</p>
			</div>
		) : (
			<div className='center'>loading</div>
		);

		return <div className='container'>{post}</div>;
	}
}

export default Post;
