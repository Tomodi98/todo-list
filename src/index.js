import '../dist/style.css';
import {todosList, projects, addTodo, addProject} from './objects.js';
import {showForm, changeButtonStyle, renderArray} from './DOMmanipulation.js';

const addProjectButton = document.querySelector ('aside > button');
console.log(addProjectButton);
let addTodoButton = document.querySelectorAll('.todo');
addTodoButton = addTodoButton[addTodoButton.length - 1].firstElementChild.firstElementChild;
const projectContainer = document.querySelector('.projects');

addTodo('Todo1', 'Due date', 'description', 'priority', false);
addTodo('Todo2', 'Due date', 'description', 'priority', false);
addProject ('name1');
addProject ('name2');
console.log(todosList);
console.log(projects);

renderArray (projectContainer, projects);

addProjectButton.addEventListener('click', function(){showForm(document.querySelector('#addProject'))});
addProjectButton.addEventListener('click', function(){changeButtonStyle(addProjectButton)});

addTodoButton.addEventListener('click', function(){showForm(document.querySelectorAll('.addToDo')[0])});
addTodoButton.addEventListener('click', function(){showForm(document.querySelectorAll('.addToDo')[1])});
addTodoButton.addEventListener('click', function(){changeButtonStyle(addTodoButton)});