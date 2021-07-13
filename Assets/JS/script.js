var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {

    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    formEl.reset();

    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    // send as an argument to the createTaskEl function
    createTaskEl(taskDataObj);
};

// new function
var createTaskEl = function(taskDataObj) {
    // creates a list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // creates div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // gives class name to style
    taskInfoEl.className = "task-info";

    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    

    // appends new div content from taskINfoEl to listItemEl 
    // which is then appended to the main list element tasksToEl
    listItemEl.appendChild(taskInfoEl);
    tasksToDoEl.appendChild(listItemEl);


}


formEl.addEventListener("submit", taskFormHandler);
