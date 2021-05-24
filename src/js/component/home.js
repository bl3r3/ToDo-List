import React, { useState, useEffect } from "react";
import { Task } from "./Task.jsx";

import { addUser, addTasksUser, resolveTask, deleteAllTasks } from "./utils.js";

export function Home() {
	const [newTask, setNewTask] = useState("");
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		addUser().then(() => resolveTask(setTasks));
	}, []);

	return (
		<div className="text-center mt-5 todo-list">
			<h1>ToDo List</h1>
			<div className="main">
				<input
					value={newTask}
					onChange={e => setNewTask(e.target.value)}
					onKeyPress={async e => {
						if (e.key == "Enter") {
							await addTasksUser([
								...tasks,
								{ label: newTask, done: false }
							]);
							await resolveTask(setTasks);
							setNewTask("");
						}
					}}
				/>
				<ul>
					{tasks.map((task, index) => (
						<Task
							label={task.label}
							key={index}
							onClick={async e => {
								let filterTasks = tasks.filter(
									t => t.label != task.label
								);
								await addTasksUser(filterTasks);
								await resolveTask(setTasks);
							}}
						/>
					))}
				</ul>
				<div className="tasks-left">
					<span>
						{tasks.length == 1
							? `${tasks.length} task left`
							: tasks.length == 0
							? "no one task for do"
							: `${tasks.length} tasks left`}
					</span>
					<button
						onClick={e => {
							deleteAllTasks();
							location.reload();
						}}
						className="btn btn-danger">
						DELETE ALL TASK
					</button>
				</div>
			</div>
		</div>
	);
}
