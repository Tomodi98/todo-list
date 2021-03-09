import '../dist/style.css';
import {todosList, projects, addTodo, addProject} from './objects.js';
import {showForm, changeButtonStyle} from './DOMmanipulation.js';

addTodo('Todo1', 'Due date', 'description', 'priority', false);
addTodo('Todo2', 'Due date', 'description', 'priority', false);
console.log(todosList[0].title);

document.querySelector('.projects > button').addEventListener('click', function(){showForm(document.querySelector('#addProject'))});
document.querySelector ('.projects > .plusButton').addEventListener('click', function() {changeButtonStyle()});