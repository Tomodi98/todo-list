import '../dist/style.css';
import {todosList, projects, addTodo, addProject} from './objects.js';
import {showForm, changeButtonStyle, renderArray, renderTasks, addProjectDOM, editProject, editText, confirmNameOfProject} from './DOMmanipulation.js';

const addProjectButton = document.querySelector ('aside > button');
let addTodoButton = document.querySelectorAll('.todo');
addTodoButton = addTodoButton[addTodoButton.length - 1].firstElementChild.firstElementChild;
const projectContainer = document.querySelector('.projects');
const taskContainer = document.querySelector('#tasks');
const selectedProject = document.querySelector('main > h1');
const editProjectName = document.querySelector('#editProjectName');
const projectNameForm = document.querySelector('#projectNameForm');
const projectNewName = document.querySelector('#inputProjectName');
const confirmProjectNameButton = document.querySelector('#confirmProjectName');
const confirmProject = document.querySelector('#addProject > button');

//testing functions
addTodo('Todo1', 'Due date', 'General', 'description', 'priority', false);
addTodo('Todo2', 'Due date 2', 'General', 'description', 'priority', false);
addProject ('General');

//renders saved projects on app load
renderArray (projectContainer, projects);

//renders tasks in selected project (general as default on app load)
renderTasks (taskContainer, selectedProject, todosList);

//function to edit current project the user is seeing
selectedProject.addEventListener('click', function(){editProject()});
//function to edit project name
editProjectName.addEventListener('click', function(){editText(projectNameForm, selectedProject)});
//confirm project name by clicking 'OK'
confirmProjectNameButton.addEventListener('click', function(){confirmNameOfProject(projectNewName, selectedProject), editText(projectNameForm, selectedProject)});

//adds function to add project button
addProjectButton.addEventListener('click', function(){showForm(document.querySelector('#addProject'))});
addProjectButton.addEventListener('click', function(){changeButtonStyle(addProjectButton)});

//adds function to confirm project button (the button that
//adds a new project to the list)
confirmProject.addEventListener('click', function(){addProjectDOM(projects)});
confirmProject.addEventListener('click', function(){showForm(document.querySelector('#addProject'))});
confirmProject.addEventListener('click', function(){changeButtonStyle(addProjectButton)});

//adds function to add task button
addTodoButton.addEventListener('click', function(){showForm(document.querySelectorAll('.addToDo')[0])});
addTodoButton.addEventListener('click', function(){showForm(document.querySelectorAll('.addToDo')[1])});
addTodoButton.addEventListener('click', function(){changeButtonStyle(addTodoButton)});

export {
    projectContainer
};