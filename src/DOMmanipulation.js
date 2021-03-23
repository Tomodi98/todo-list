import {addProject} from './objects.js';
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
    projectContainer.appendChild(node);
}

//needs to render task name and due date with an option of
//showing other values (description etc.) on demand
function renderTasks (container, selectedProject, array) {
    let node;
    for (let i = 0; i < array.length; i++) {
        node = document.createElement('div');
        node.textContent = array[i].title;
        container.appendChild(node);
    }
}

export {
    showForm,
    changeButtonStyle,
    renderArray,
    renderTasks,
    addProjectDOM
};