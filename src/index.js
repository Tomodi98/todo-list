import '../dist/style.css';
import {todosList, projects, addTodo, addProject} from './objects.js';
import {showForm, changeButtonStyle} from './DOMmanipulation.js';

const addProjectButton = document.querySelector ('.projects > .plusButton');

let addTodoButton = document.querySelectorAll('.todo');
addTodoButton = addTodoButton[addTodoButton.length - 1].firstElementChild.firstElementChild;

addTodo('Todo1', 'Due date', 'description', 'priority', false);
addTodo('Todo2', 'Due date', 'description', 'priority', false);

addProjectButton.addEventListener('click', function(){showForm(document.querySelector('#addProject'))});
addProjectButton.addEventListener('click', function(){changeButtonStyle(addProjectButton)});


addTodoButton.addEventListener('click', function(){showForm(document.querySelectorAll('.addToDo')[0])});
addTodoButton.addEventListener('click', function(){showForm(document.querySelectorAll('.addToDo')[1])});
addTodoButton.addEventListener('click', function(){changeButtonStyle(addTodoButton)});