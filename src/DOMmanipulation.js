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

function renderArray (container, array, cssClass) {

}

export {
    showForm,
    changeButtonStyle
};