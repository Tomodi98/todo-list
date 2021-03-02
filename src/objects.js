let todosList = [];
let projects = [];

//todo constructor
function Todo(title, dueDate, description, priority, done) {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.priority = priority;
    this.done = done;
}

//function that creates todos and saves them as objects
function addTodo(title, dueDate, description, priority, done) {
    let newTodo = new Todo(title, dueDate, description, priority, done);
    todosList.push(newTodo);
}

//function that adds projects
function addProject (name) {
    projects.push(name);
}

export {todosList, projects, addTodo, addProject};