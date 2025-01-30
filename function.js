const todoInput =doucument.queryselsctor(".todo-input");
const todoButton =doucument.queryselsctor(".todo-button");
const todoList =doucument.queryselsctor(".todo-list");
const filterOption =doucument.queryselsctor(".filter-todo");

document.addEventListener("DOMContentLoaded",getLocalTodos);
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck)
