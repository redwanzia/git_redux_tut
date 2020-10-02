import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux'
import {deletePost} from '../actions/postAction'





export class Post extends Component {

clickHandler = () => {
this.props.deletePost(this.props.post.id)
this.props.history.push('/')

	}

	render() {
		
		const post = this.props.post ? (
			<div className='post'>
				<h4 className='center'>{this.props.post.title}</h4>
				<p>{this.props.post.body}</p>
				<div className="center">
					<button onClick={this.clickHandler} className="btn grey">delete</button>
				</div>
			</div>
		) : (
			<div className='center'>loading</div>
		);

		return <div className='container'>{post}</div>;
	}
}

const mapStateToProps = (state, ownProps)=>{
	let id = ownProps.match.params.post_id
	return {
		post: state.posts.find(post => post.id === id)
	}

}

const mapDispatchToProps =(dispatch) =>{
return{
	deletePost: (id)=>{dispatch(deletePost(id))}
}
}



export default connect(mapStateToProps,mapDispatchToProps) (Post)
