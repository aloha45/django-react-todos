import React, { Component, useState, useEffect } from "react";
import Form from "./components/form";
import axios from "axios";
import "./App.css";

// const App = () => {
//   const [todoList, setTodoList] = useState([]);
//   const getTodos = () => {
//     axios.get("/api/todos").then((res) => setTodoList(res.data));
// 	};
  
// 	// look into data store patterns (data access)

// 	const handleDelete = (todo) => {
// 		axios.delete(`/api/todos/${todo.id}`).then(getTodos());
// 	};

// 	const addItem = (newItem) => {
// 		axios.post("/api/todos/", newItem).then(getTodos());
// 	};

//   // useEffect(()=> getTodos(), [])

// 	return (
// 		<>
// 			<main className="container">
// 				<h1>Todo app</h1>
// 				<button onClick={getTodos}>Get List</button>
// 				<ul className="todos">
// 					{todoList.map((todo, idx) => (
// 						<div key={idx}>
// 							<li>{todo.title}</li>
// 							<li>{todo.id}</li>
// 							<button key={idx} onClick={() => handleDelete(todo)}>
// 								X
// 							</button>
// 						</div>
// 					))}
// 				</ul>
// 				<Form addItem={addItem} />
// 			</main>
// 		</>
// 	);
// };

// export default App;
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


	addItem = (newItem) => {
		axios.post("/api/todos/", newItem).then(this.getTodos());
		// this.setState({todoList: [...this.state.todoList, newItem]})
	};

	deleteItem = (item) => {
		axios.delete(`/api/todos/${item.id}/`).then(this.getTodos());
	};

	render() {
		return (
			<>
				<main className="container">
					<h1>Todo app</h1>
					<ul className="todos">
						{this.state.todoList.map((todo, idx) => (
							<div key={idx}>
								<li>{todo.title}</li>
								<button key={idx} onClick={() => this.deleteItem(todo)}>
									X
								</button>
							</div>
						))}
					</ul>
					<Form addItem={this.addItem} />
				</main>
			</>
		);
	}
}

export default App;
