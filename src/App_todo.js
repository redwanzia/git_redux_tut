import React, { Component } from 'react';
import Todo from './component/Todo';
import AddNewTodo from './component/AddNewTodo';

export class App extends Component {
	state = {
		todos: []
	};

	deleteTodo = (id) => {
		const todos = this.state.todos.filter((todo) => {
			return todo.id !== id;
		});
		this.setState({ todos });
	};

	addTodo = (todo) => {
		todo.id = Math.random();
		let todos = [ ...this.state.todos, todo ];
		this.setState({ todos });
	};

	render() {
		return (
			<div className='todo-app container'>
				<h1 className='center blue-text'>todo s app</h1>
				<Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
				<AddNewTodo addTodo={this.addTodo} />
			</div>
		);
	}
}

export default App;
