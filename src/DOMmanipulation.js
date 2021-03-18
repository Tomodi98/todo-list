import {addProject} from './objects.js';


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
        node.textContent = array[i];
        container.appendChild(node);
    }
}

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
    renderTasks
};