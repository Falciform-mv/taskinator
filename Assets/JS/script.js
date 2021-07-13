var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {

    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // creates a list item
    var listItemEl = document.createElement("li");

    // creates div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");

    // gives class name to style
    taskInfoEl.className = "task-info";

    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.className = "task-item";

    // appends new div content from taskINfoEl to listItemEl 
    // which is then appended to the main list element tasksToEl
    listItemEl.appendChild(taskInfoEl);

   
    tasksToDoEl.appendChild(listItemEl);
};


formEl.addEventListener("submit", createTaskHandler);
