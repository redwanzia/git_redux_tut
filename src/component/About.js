import React from 'react';
import Rainbow from './hoc/Rainbow';

const About = () => {
	return (
		<div className='container'>
			<h4 className='center'>about</h4>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nulla eos voluptates tempora impedit
				quaerat enim adipisci laboriosam veritatis doloribus? Repudiandae pariatur ab omnis hic nemo quos
				repellat error dolore!
			</p>
		</div>
	);
};

export default Rainbow(About);
