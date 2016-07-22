
// event handler for adding new task
var btn = document.getElementById('submitNewTask');
btn.addEventListener('click',addNewTask);

var btn = document.getElementById('saveChanges');
btn.addEventListener('click',submitTaskList);

var btn = document.getElementById('clearList');
btn.addEventListener('click',clearTaskList);

var taskListString = localStorage.getItem('taskList');
//console.log(taskListString);
var taskList = JSON.parse(taskListString);
//console.log(taskList);

createTable();

function addNewTask() {
  //get new task name
  //var newTaskName = document.getElementById('taskName').value;
  //console.log(newTaskName);
  // create new task date
  var currentDate = new Date();
  var newTaskDate = currentDate.toDateString();
  //console.log(newTaskDate);
  var newTask = {
    taskName: document.getElementById('taskName').value,
    taskDate: newTaskDate,
    isComplete: 0
  };
  console.log(newTask);
  //add new task to taks list array
  taskList.push({taskName: newTask.taskName, taskDate: newTask.taskDate, isComplete: newTask.isComplete});
  console.log(taskList);
  taskCheckBoxes();
  createTable();
  //what about a for loop to update task status
  var taskListString = JSON.stringify(taskList);
  localStorage.setItem('taskList',taskListString);
  //console.log(taskListString);
  document.getElementById('taskName').value="";
}

function createTable() {
  //create task table
  var taskTable = document.getElementById('table');
  var holder = "";
  taskCheckBoxes();
  // loop through task list to add new tasks and create table
  for (var i=0; i < taskList.length; i++){
    holder += "<tr>";
    holder += "<td>" + (i+1) + "</td>";
    holder += "<td>" + taskList[i].taskName + "</td>";
    holder += "<td>" + taskList[i].taskDate + "</td>";

    if (taskList[i].isComplete == 1) {
      holder += "<td>" + "<input id = 'completed' type = 'checkbox'  checked = true>" + "</td>";
    } else{
      holder += "<td>" + "<input id = 'completed' type = 'checkbox'>" + "</td>";
    }
    holder += "</tr>";
  }
  taskTable.innerHTML = holder;
}

function taskCheckBoxes() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (j=0; j<checkboxes.length; j++) {
      if (checkboxes[j].checked == true) {
        taskList[j].isComplete = 1;
        console.log(taskList[j].isComplete);
        }
      }
    }

function submitTaskList(){
  taskCheckBoxes();
  var taskListString = JSON.stringify(taskList);
  localStorage.setItem('taskList',taskListString);
}

function clearTaskList() {
  //code to clear out task list for initial use
  taskList=[];
  var taskListString = JSON.stringify(taskList);
  localStorage.setItem('taskList',taskListString);
  var taskTable = document.getElementById('table');
  taskTable.innerHTML = "";
}
