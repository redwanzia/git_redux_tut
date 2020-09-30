import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';

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

// import React from 'react';

// const Home = () => {
// 	return (
// 		<div className='container'>
// 			<h4 className='center'>home</h4>
// 			<p>
// 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, vero nam reiciendis expedita dolor
// 				numquam illum perspiciatis natus tempore labore id, asperiores consectetur cum nisi.
// 			</p>
// 		</div>
// 	);
// };

// export default Home;
