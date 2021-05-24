export const URLBASE = "https://assets.breatheco.de/apis/fake/todos";

export const getTasks = async () => {
	let response = await fetch(`${URLBASE}/user/bl3r3`, {
		mode: "cors"
	});
	let data = await response.json();
	return data;
};

export const addUser = async () => {
	try {
		let response = await fetch(`${URLBASE}/user/bl3r3`, {
			mode: "cors",
			headers: {
				"Content-Type": "application/json"
			},
			method: "POST",
			body: JSON.stringify([])
		});

		let result = await response.json();
	} catch (error) {
		throw error;
	}
};

export const addTasksUser = async tasks => {
	try {
		let response = await fetch(`${URLBASE}/user/bl3r3`, {
			mode: "cors",
			headers: {
				"Content-Type": "application/json"
			},
			method: "PUT",
			body: JSON.stringify(tasks)
		});
		let result = await response.json();
	} catch (error) {
		throw error;
	}
};

export async function resolveTask(setTasks) {
	try {
		const dataTask = await getTasks();
		console.log(dataTask);
		setTasks(Array.isArray(dataTask) ? dataTask : []);
	} catch (error) {
		setTasks([]);
	}
}

export async function deleteAllTasks() {
	try {
		let response = await fetch(`${URLBASE}/user/bl3r3`, {
			headers: {
				"Content-Type": "application/json"
			},
			method: "DELETE"
		});
	} catch (error) {
		throw error;
	}
}
