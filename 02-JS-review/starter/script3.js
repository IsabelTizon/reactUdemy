// ASYNCHRONOUS JS: It waits for the promise to resolve while continuing to execute other code
// FETCH: https://jsonplaceholder.typicode.com/
// It's a promise because there isn't a callback funtion handling the response directly
console.log(
	fetch("https://jsonplaceholder.typicode.com/todos")
);
// Fetching the data from the API (jsonplaceholder)
fetch("https://jsonplaceholder.typicode.com/todos")
	.then((res) => res.json()) // Convert the response to json
	.then((data) =>
		console.log(`First Data fetched: ${data}`)
	); // Log the received data. The data will be logged as and object because it wasn't stringify

// This console.log will run first because the fetch request is asychronous
console.log("jonas");

//ASYNC / AWAIT
async function getTodos() {
	// .then((res) => res.json()): the next code is the same
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/todos"
	);
	const data = await res.json();
	console.log(
		`Second Data Logged: ${JSON.stringify(data)}` // Log the data after converting it to a string (using JSON.stringify())
	);
	return `Data returned: ${JSON.stringify(data)}`;
}
const todos = getTodos();
// Js has no way of knowing yet what these todos are going to be, and so "Todos" is a promise
console.log(todos);

console.log("Will");
