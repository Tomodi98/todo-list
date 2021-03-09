import {addProject} from './objects.js';

//button that expands the add project form
const addProjectPlusButton = document.querySelector ('.projects > .plusButton');

function showForm (form) {
    if (form.style.display === 'none') {
        form.style.display = 'block';
    }
    else {
        form.style.display = 'none';
    }
}

function changeButtonStyle () {
    if(addProjectPlusButton.className === 'plusButton') {
        addProjectPlusButton.className = 'crossButton';
    }
    else {
        addProjectPlusButton.className = 'plusButton';
    }
}

export {
    showForm,
    changeButtonStyle
};