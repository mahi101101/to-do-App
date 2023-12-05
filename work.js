const inputTask = document.getElementById("inputTask");
let taskList = document.getElementById("task-display");
showData();

function newListTask() {
  let newChkBox = document.createElement("input");
  let del = document.createElement("span");
  let newtask = document.createElement("li");
  let task = document.createElement("label");

  newChkBox.setAttribute("id", inputTask.value);
  newChkBox.setAttribute("type", "checkbox");
  newChkBox.setAttribute("class", "form-check-input m-0");
  newChkBox.setAttribute("checkBoxState", newChkBox.checked.toString());

  task.setAttribute("class", "form-check-label m-0 ps-2");
  task.setAttribute("for", inputTask.value);
  task.innerHTML = inputTask.value;

  del.setAttribute("class", "delete");
  del.setAttribute("onclick", "del(this)");
  del.innerHTML = "&times;";

  newtask.appendChild(newChkBox);
  newtask.appendChild(task);
  newtask.appendChild(del);
  newtask.setAttribute("class", "");

  return newtask;
}

function handleClick() {
  let listItem = this.querySelector(".form-check-input");
  if (listItem.checked == true) {
    listItem.setAttribute("checkBoxState", "true");
    listItem.checked = Boolean(listItem.checkBoxState);
    element.classList.remove("unselected");
    element.classList.add("selected");
    taskList = document.getElementById("task-display");
    saveData();
  } else {
    listItem.setAttribute("checkBoxState", "false");
    listItem.checked = Boolean(listItem.checkBoxState);
    element.classList.remove("selected");
    element.classList.add("unselected");
    taskList = document.getElementById("task-display");
    saveData();
  }
}

function addTask() {
  console.log("in");
  if (inputTask.value == null || inputTask.value == "") {
    alert("Enter the task");
  } else if (inputTask.value.length !== 0) {
    let newtask = newListTask();
    taskList.appendChild(newtask);
    saveData();
  }
  inputTask.value = "";
}

function del(button) {
  let li = button.parentElement;
  li.parentElement.removeChild(li);
  taskList = document.getElementById("task-display");
  saveData();
}

function setEventListener() {
  let listItems = document.querySelectorAll("li");
  listItems.forEach(function (li) {
    li.addEventListener("click", function (event) {
      let box = this.querySelector(".form-check-input");
      if (box.checked == true ) {
        box.setAttribute("checkBoxState", "true");
        box.checked = true;
        this.classList.remove("unselected");
        this.classList.add("selected");
        taskList = document.getElementById("task-display");
        saveData();
      } else {
        box.setAttribute("checkBoxState", "false");
        box.checked = false;
        this.classList.remove("selected");
        this.classList.add("unselected");
        taskList = document.getElementById("task-display");
        saveData();
      }
    });
  });
}

function setCheckBox() {
  let listItems = document.querySelectorAll("li");
  listItems.forEach((li) => {
    let box = li.querySelector(".form-check-input");
    if (li.classList.contains("selected")) {
      box.checked = true;
    }
  });
}

function showData() {
  let tasks = localStorage.getItem("todoTasks");
  taskList.innerHTML = tasks;
  setEventListener();
  setCheckBox();
}

function saveData() {
  setEventListener();
  localStorage.setItem("todoTasks", taskList.innerHTML);
}
