import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	console.log("HERE'S THE TODO LIST", _todoService.Todos)
	
	let template = ''
	_todoService.Todos.forEach(Todo => {
    	template += Todo.Template
  	})
	document.getElementById('todos').innerHTML = template;
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
    		completed: false,
    		description: form.todoAdd.value
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
