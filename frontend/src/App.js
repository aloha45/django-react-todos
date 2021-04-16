import React, { Component } from "react";
import Form from "./components/form";
import axios from "axios";
import "./App.css";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			test: "test works",
			todoList: [],
		};
	}

	componentDidMount() {
		this.getTodos();
	}

	getTodos() {
		axios
			.get("/api/todos")
			.then((res) => this.setState({ todoList: res.data }));
	}

  // look into data store patterns (data access)

	handleDelete = (todo) => {
		axios.delete(`/api/todos/${todo.id}`).then((res) => this.getTodos());
	};

	addItem = (newItem) => {
		axios.post("/api/todos/", newItem).then((res) => this.getTodos());
		// this.setState({todoList: [...this.state.todoList, newItem]})
	};

	deleteItem = (item) => {
		axios.delete(`/api/todos/${item.id}/`).then((res) => this.getTodos());
	};

	render() {
		return (
			<>
				<main className="container">
					<h1>Todo app</h1>
					<button className="btn btn-primary">Add task</button>
					<ul className="todos">
						{this.state.todoList.map((todo, idx) => (
							<>
								<li key={idx}>{todo.title}</li>
								<button key={idx} onClick={() => this.deleteItem(todo)}>
									X
								</button>
							</>
						))}
					</ul>
					<Form addItem={this.addItem} />
				</main>
			</>
		);
	}
}

export default App;
