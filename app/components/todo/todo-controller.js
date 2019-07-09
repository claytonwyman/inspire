import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	console.log("HERE'S THE TODO LIST", _todoService.Todo)
	//document.getElementById('todos').innerHTML += `
    //	<li>${_todoService.Todo.desc} - ${_todoService.Todo.completed}</li>
    //`;
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	//document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			_id: {type: String, required: true, unique: true},
    		completed: { type: Boolean, required: true, default: false},
    		user: { type: String, required: true},
    		description: { type: String, required: true}
		}

		_todoService.addTodo(todo)
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}
