import React, { Component } from "react";

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: {
				title: "",
				description: "",
				completed: false,
			},
		};
	}

	handleChange = (e) => {
		let { name, value } = e.target;

		if (e.target.type === "checkbox") {
			value = e.target.checked;
		}

		const activeItem = { ...this.state.activeItem, [name]: value };

		this.setState({ activeItem });
	};

  handleSubmit = (e) => {
    e.preventDefault()
    // alert("saved" + JSON.stringify(this.state.activeItem))
    this.props.addItem(this.state.activeItem)
  }

	render() {
		return (
			<>
				<h2>Todo Item</h2>
				<form>
					<label htmlFor="todo-title">Title: </label>
					<input
						type="text"
						id="todo-title"
						name="title"
						value={this.state.activeItem.title}
						onChange={this.handleChange}
						placeholder="Enter Todo Title"
					/>
					<label htmlFor="todo-description">Description: </label>
					<input
						type="text"
						id="todo-description"
						name="description"
						value={this.state.activeItem.description}
						onChange={this.handleChange}
						placeholder="Enter Todo description"
					/>
					<label htmlFor="completed">Completed? </label>
					<input
						type="checkbox"
						name="completed"
						checked={this.state.activeItem.completed}
						onChange={this.handleChange}
					/>
					Completed
					<button color="success" onClick={this.handleSubmit}>
						Save
					</button>
				</form>
			</>
		);
	}
}
