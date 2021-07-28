const UNCOMPLETED_LIST_TODO_ID = "todos"; //? variable global 
const COMPLETED_LIST_TODO_ID = "completed-todos"; 

function addTodo() {
    const uncompletedTODOList = document.getElementById(UNCOMPLETED_LIST_TODO_ID ); //? get element from var global
    const textTodo = document.getElementById("title").value;
    const timestamp = document.getElementById("date").value;
    
    const todo = makeTodo(textTodo, timestamp); 
    uncompletedTODOList.append(todo); //? append tag html and text to element todos (html)
}

function makeTodo(data, timestamp, isCompleted) { //? param isCompleted is boolean
    const textTitle = document.createElement("h2"); //? create element h2
    textTitle.innerText = data;
 
    const textTimestamp = document.createElement("p");
    textTimestamp.innerText = timestamp;
 
    const textContainer = document.createElement("div");
    textContainer.classList.add("inner") 
    textContainer.append(textTitle, textTimestamp); //? marge 2 param
 
    const container = document.createElement("div");
    container.classList.add("item", "shadow") //? add 2 class 
    container.append(textContainer); //
    if(isCompleted){
        container.append(createUndoButton(), createTrashButton()); //? create undo and trash button with event
    } else {
        container.append(createCheckButton());
    }
    return container;
}

//! create element button undo, trash or checklist
function createButton(buttonTypeClass , eventListeners) {
    const button = document.createElement("button"); //? create elemen button
    button.classList.add(buttonTypeClass); //? dari class 'check-button'
    button.addEventListener("click", function (event) { //? add event click
        eventListeners(event);  //? actually would remove the tag html and data from param,
    });
    return button;
}

function addTaskToCompleted(taskElement) { //? param => tag html and data
    const taskTitle = taskElement.querySelector(".inner > h2").innerText; //? get text tag h2
    const taskTimestamp = taskElement.querySelector(".inner > p").innerText; //? get text tag p
 
    const newTodo = makeTodo(taskTitle, taskTimestamp, true); 
    const listCompleted = document.getElementById(COMPLETED_LIST_TODO_ID); //? get element for from global
    listCompleted.append(newTodo); //? passing tag html and data to elemen id complete-todos

    taskElement.remove(); //? remove tag html and data
} 

function createCheckButton() {
    return createButton("check-button", function(event){ //? call function createButton (for create elemen button)
        addTaskToCompleted(event.target.parentElement); //! get tag html and data
    });
}


function undoTaskFromCompleted(taskElement){
    const taskTitle = taskElement.querySelector(".inner > h2").innerText;
    const taskTimestamp = taskElement.querySelector(".inner > p").innerText;
    
    const listUncompleted = document.getElementById(UNCOMPLETED_LIST_TODO_ID); //? get element todos
    const newTodo = makeTodo(taskTitle, taskTimestamp, false);
    listUncompleted.append(newTodo); //? passing tag html and data to elemen id 'todos'

    taskElement.remove();
}

function createUndoButton() {
    return createButton("undo-button", function(event){
        undoTaskFromCompleted(event.target.parentElement);
    });
}

function removeTaskFromCompleted(taskElement) {
    taskElement.remove();
}

function createTrashButton() {
    return createButton("trash-button", function(event){
        removeTaskFromCompleted(event.target.parentElement);
    });
}