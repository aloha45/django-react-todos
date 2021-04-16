import React, { Component } from "react";
import "./App.css";

const todoItems = [
	{
		id: 1,
		title: "Go to Market",
		description: "Buy ingredients to prepare dinner",
		completed: true,
	},
	{
		id: 2,
		title: "Study",
		description: "Read Algebra and History textbook for the upcoming test",
		completed: false,
	},
	{
		id: 3,
		title: "Sammy's books",
		description: "Go to library to return Sammy's books",
		completed: true,
	},
	{
		id: 4,
		title: "Article",
		description: "Write article on how to use Django with React",
		completed: false,
	},
];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      test: "test works",
			todoList: [
				{
					id: 1,
					title: "Go to Market",
					description: "Buy ingredients to prepare dinner",
					completed: true,
				},
				{
					id: 2,
					title: "Study",
					description:
						"Read Algebra and History textbook for the upcoming test",
					completed: false,
				},
				{
					id: 3,
					title: "Sammy's books",
					description: "Go to library to return Sammy's books",
					completed: true,
				},
				{
					id: 4,
					title: "Article",
					description: "Write article on how to use Django with React",
					completed: false,
				},
			],
		};
	}

	render() {
		return (
			<>
				<main className="container">
					<h1>Todo app</h1>
					<button className="btn btn-primary">Add task</button>
					<div className="todos">
						{this.state.todoList.map((todo) => 
							<p>{todo.title}</p>
						)}
					</div>
				</main>
			</>
		);
	}
}

export default App;
