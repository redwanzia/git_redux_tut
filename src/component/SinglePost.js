import React from 'react';
import Pokeball from '../pokeball.png';
import { Link } from 'react-router-dom';

const singlePost = ({ post }) => {
	console.log(post);
	return (
		<div className='post card' key={post.id}>
			<img alt='#' src={Pokeball} />
			<div className='card-content'>
				<Link to={`/${post.id}`}>
					<span className='card-title red-text'>{post.title}</span>
				</Link>

				<p>{post.body}</p>
			</div>
		</div>
	);
};

export default singlePost;
