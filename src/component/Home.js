import React, { Component } from 'react';
import SinglePost from './SinglePost';
import {connect} from 'react-redux'

export class Home extends Component {
	render() {
		const { posts } = this.props;
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

const mapStateToProps = state =>{
	return {
		posts: state.posts

	}
}

export default connect(mapStateToProps)(Home);
