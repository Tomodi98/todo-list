import {addProject, todosList} from './objects.js';
import {projectContainer} from './index.js';

function showForm (form) {
    if (form.style.display === 'none') {
        form.style.display = 'block';
    }
    else {
        form.style.display = 'none';
    }
}

function changeButtonStyle (button) {
    if(button.className === 'plusButton') {
        button.className = 'crossButton';
    }
    else {
        button.className = 'plusButton';
    }
}

function renderArray (container, array) {
    let node;
    for (let i = 0; i < array.length; i++) {
        node = document.createElement('div');
        node.setAttribute('data-index', i);
        node.textContent = array[i];
        node.addEventListener('click', function() {clickProject(this)});
        container.appendChild(node);
    }
}

function addProjectDOM (array) {
    let nodeList = document.querySelector ('.projects').children;
    let input = document.querySelector ('#addProject > input');
    if (input.value) {
        array.push(input.value);
        renderProject(input.value,nodeList.length);
        input.value = '';
    }
}

function renderProject (name, index) {
    let node = document.createElement ('div');
    node.setAttribute('data-index', index);
    node.textContent = name;
    node.addEventListener('click', function() {clickProject(this)});
    projectContainer.appendChild(node);
}

function clickProject (e) {
    //changes the title of selected project
    const currentProject = document.querySelector('main > h1');
    currentProject.textContent = e.textContent;

    //displays tasks that belong to selected project

}

//needs to render task name and due date with an option of
//showing other values (description etc.) on demand
function renderTasks (container, selectedProject, array) {
    let node;
    let tempContainer;
    let temp;
    selectedProject = document.querySelector('main > h1');
    for (let i = 0; i < array.length; i++) {
        //adds a class to the task
        node = document.createElement('div');
        node.classList.add('todo');
        node.setAttribute('data-index', i);
        container.appendChild(node);
        tempContainer = node;

        //adds text to the task

        node = document.createElement('div');
        tempContainer.appendChild(node);
        temp = tempContainer;
        tempContainer = node;
        
        node = document.createElement('input');
        node.setAttribute('type', 'checkbox');
        tempContainer.appendChild(node);

        node = document.createElement('div');
        node.textContent = array[i].title;
        tempContainer.appendChild(node);

        node = document.createElement('div');
        node.textContent = array[i].dueDate;
        temp.appendChild(node);
    }
}

function editProject () {
    const options = document.querySelector('#projectOptions');
    if (options.style.display === 'none') {
        options.style.display = 'block';
    }
    else {
        options.style.display = 'none';
    }
}

//edit name of a project
function editText (inputForm, text) {
    const inputProjectName = document.querySelector('#inputProjectName');

    if (inputForm.className === 'hidden') {
        inputForm.className = 'shown';
        text.className = 'hidden';
        inputProjectName.value = text.textContent;
    }
    else {
        inputForm.className = 'hidden';
        text.className = 'shown';
    }
}

function confirmNameOfProject (name, text) {
    text.textContent = name.value;
}

export {
    showForm,
    changeButtonStyle,
    renderArray,
    renderTasks,
    addProjectDOM,
    editProject,
    editText,
    confirmNameOfProject
};