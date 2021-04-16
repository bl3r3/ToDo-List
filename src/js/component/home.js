import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [newTask, setNewTask] = useState("");
	const [tasks, setTasks] = useState([]);

	return (
		<div className="text-center mt-5 todo-list">
			<h1>ToDo List</h1>
			<div className="main">
				<input
					value={newTask}
					onChange={e => setNewTask(e.target.value)}
					onKeyPress={e => {
						if (e.key == "Enter") {
							setTasks([
								...tasks,
								{
									id: Math.random()
										.toString(16)
										.substring(2),
									label: newTask
								}
							]);
							setNewTask("");
						}
					}}
				/>
				<ul>
					{tasks.map(task => (
						<li key={task.id}>
							{task.label}
							<span
								onClick={e => {
									let filterTasks = tasks.filter(
										t => t.id != task.id
									);
									setTasks(filterTasks);
								}}>
								✖
							</span>
						</li>
					))}
				</ul>
				<div>
					<span>
						{tasks.length == 1
							? `${tasks.length} tarea restante`
							: tasks.length == 0
							? "No hay tareas por hacer"
							: `${tasks.length} tareas restantes`}
					</span>
				</div>
			</div>
		</div>
	);
}
