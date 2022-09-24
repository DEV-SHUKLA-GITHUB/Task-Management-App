let addTask = document.getElementsByClassName("add-task"); //button
let taskContainers = document.getElementsByClassName("task-container"); //taskContainer 1/2/3
const colors = [
  "#76E4F7",
  "#C4F1F9",
  "#FC8181",
  "#38B2AC",
  "#ED89360",
  "#F56565",
  "#ED64A6",
  "#2E90FF",
  "#007AB8",
  "#6482C0",
  "#97266D",
  "#553C9A",
  "#0987A0",
  "#FEB2B2",
];

let draggedItem = null; //pointer for cards
function randomColor() {
  const color = colors[Math.floor(Math.random() * colors.length)];

  return color;
}

for (task of addTask) {
  task.addEventListener("click", function clickHandler(event) {
    event.preventDefault();
    //   const taskItems = document.querySelector(".task-items");
    const newTask = document.createElement("textarea");
    newTask.setAttribute("draggable", "true");
    newTask.innerText = "Add your notes here";
    newTask.readOnly = true;
    newTask.classList.add("note");
    newTask.addEventListener("dblclick", () => {
      newTask.readOnly = false;
    });
    // newTask.setAttribute("id", "task");
    newTask.setAttribute("style", "resize: none");
    event.target.parentElement.appendChild(newTask);
    newTask.style.backgroundColor = `${randomColor()}`;
    newTask.addEventListener("dragstart", dragStart);
  });
}
let notes = document.getElementsByClassName("note"); //task
for (note of notes) {
  note.addEventListener("dragstart", dragStart);
  note.addEventListener("dragend", dragEnd);
}

function dragStart(e) {
  // e.preventDefault();
  draggedItem = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
}

function dragEnd(event) {
  event.preventDefault();
  draggedItem = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
}

for (taskContainer of taskContainers) {
  taskContainer.addEventListener("dragover", dragOver);
  taskContainer.addEventListener("dragenter", dragEnter);
  taskContainer.addEventListener("dragleave", dragLeave);
  taskContainer.addEventListener("drop", dragDrop);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  this.style.border = "1px dashed #ccc";
}

function dragLeave() {
  this.style.border = "none";
}

function dragDrop(event) {
  if (this.classList[0] !== "task-container") {
    console.log("Deepak");
  }
  this.style.border = "none";
  this.appendChild(draggedItem);
  console.log(this.classList[0]);

  draggedItem.style.removeProperty("display");
}
