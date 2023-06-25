import React from 'react';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';
import './ListTodo.scss';

class ListTodo extends React.Component {
	state = {
		listTodo: [
			{ id: 'todo1', title: 'Doing homework' },
			{ id: 'todo2', title: 'Learning React' },
			{ id: 'todo3', title: 'Cleaning house' },
		],
		editTodo: {},
	};

	addNewTodo = (todo) => {
		this.setState({
			listTodo: [...this.state.listTodo, todo],
		});
		toast.success('Add todo successful.');
	};

	handleEditTodo = (todo) => {
		let { editTodo, listTodo } = this.state;
		let listTodoEdit = [...listTodo];
		let isEmptyObj = Object.keys(editTodo).length === 0;
		if (isEmptyObj === false && editTodo.id === todo.id) {
			let objIndex = listTodoEdit.findIndex((item) => item.id === todo.id);
			listTodoEdit[objIndex].title = editTodo.title;
			console.log('save edit: ', listTodoEdit[objIndex]);
			this.setState({
				listTodo: listTodoEdit,
				editTodo: {},
			});
			toast.success('Update todo successful.');
			return;
		}

		this.setState({
			editTodo: todo,
		});
		// console.log(this.state.editTodo)
	};

	handleDeleteTodo = (todo) => {
		console.log(todo);
		let currentListTodo = this.state.listTodo;
		currentListTodo = currentListTodo.filter((item) => item.id !== todo.id);
		this.setState({
			listTodo: currentListTodo,
		});
		toast.success('Delete todo successful.');
	};

	handleOnChangeEditTodo = (event) => {
		let editTodoCopy = { ...this.state.editTodo };
		editTodoCopy.title = event.target.value;
		this.setState({
			editTodo: editTodoCopy,
		});
	};

	render() {
		let { listTodo, editTodo } = this.state;
		let isEmptyObj = Object.keys(editTodo).length === 0;
		console.log(isEmptyObj);
		return (
			<>
				<p>Simple Todo App with React</p>
				<div className="list-todo-container">
					<AddTodo addNewTodo={this.addNewTodo} />
					<div className="list-todo-content">
						{listTodo &&
							listTodo.length > 0 &&
							listTodo.map((item, index) => {
								return (
									<div
										className="todo-child"
										key={item.id}>
										{isEmptyObj === true ? (
											<span>
												{index + 1} - {item.title}
											</span>
										) : (
											<>
												{editTodo.id === item.id ? (
													<span>
														{index + 1} -{' '}
														<input
															value={editTodo.title}
															onChange={(event) =>
																this.handleOnChangeEditTodo(event)
															}></input>
													</span>
												) : (
													<span>
														{index + 1} - {item.title}
													</span>
												)}
											</>
										)}
										<button
											className="edit"
											onClick={() => this.handleEditTodo(item)}>
											{isEmptyObj === false && editTodo.id === item.id
												? 'Save'
												: 'Edit'}
										</button>
										<button
											className="delete"
											onClick={() => this.handleDeleteTodo(item)}>
											Delete
										</button>
									</div>
								);
							})}
					</div>
				</div>
			</>
		);
	}
}

export default ListTodo;
