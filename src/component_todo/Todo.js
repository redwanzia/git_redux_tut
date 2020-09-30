import React from 'react';

const Todo = ({ todos, deleteTodo }) => {
	const todoList = todos.length ? (
		todos.map((todo) => {
			return (
				<div key={todo.id} className='collection-item'>
					<span
						onClick={() => {
							deleteTodo(todo.id);
						}}
					>
						{todo.content}
					</span>
				</div>
			);
		})
	) : (
		<p className='center'> nothing more to do </p>
	);

	return <div className=' todos collection'>{todoList}</div>;
};

export default Todo;
