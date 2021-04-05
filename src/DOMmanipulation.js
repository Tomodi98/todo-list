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
    let tempContainer;
    let temp;
    for (let i = 0; i < array.length; i++) {
        //adds a class to the task
        node = document.createElement('div');
        node.classList.add('todo');
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

export {
    showForm,
    changeButtonStyle,
    renderArray,
    renderTasks,
    addProjectDOM
};