import Todo from "../../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/clayton/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}

	get Todos() {
		return _state.todos
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				let serverTodos = res.data.data
				let todoArray = serverTodos.map(c => new Todo(c))
				_setState('todos', todoArray)
			})
			.catch(err => console.error(err))
	}

	addTodo(todo) {
		console.log("Adding to the Todo List")
		todoApi.post('', todo)
			.then(res => {
				console.log("success post")
				this.getTodos()
			})
			.catch(err => console.error(err))
	}

	toggleTodoStatus(todoId) {
		console.log("Changing the Todo Completion")
		let todo = _state.todos.find(todo => todo._id == todoId)
		// Be sure to change the completed property to its opposite
		// todo.completed = !todo.completed <-- THIS FLIPS A BOOL

		todoApi.put(todoId, todo)
			.then(res => {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		console.log("Deleting from the Todo List")
		todoApi.delete()
			.then(res => {

			})
	}

}
