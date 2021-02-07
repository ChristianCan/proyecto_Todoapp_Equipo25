const father = document.getElementById("app");
const header = document.createElement("div");
const elementHome = document.createElement("h1");
const contentHome = document.createTextNode("To Do App");
const createNote = document.createElement("form");
const input = document.createElement("input");
const button = document.createElement("button");
const textButton = document.createTextNode("Add");
const box = document.createElement("div");

header.setAttribute("class", "titulo");
father.appendChild(header);

elementHome.appendChild(contentHome);
header.appendChild(elementHome);

createNote.setAttribute("align", "center");
father.appendChild(createNote);

input.setAttribute("type", "text");
input.setAttribute("placeholder", "Add a task");
input.setAttribute("id", "input-task");
createNote.appendChild(input);

button.setAttribute("type", "submit");
button.setAttribute("id", "btn-task");
button.appendChild(textButton);
createNote.appendChild(button);

box.setAttribute("class", "todo-box");
father.appendChild(box);

const inputTask = document.querySelector("#input-task");
const btnTask = document.querySelector("#btn-task");
const toDoList = document.querySelector(".todo-box");
let isChecked = false;

btnTask.addEventListener("click", addTask);
toDoList.addEventListener("click", deleteComplete);

function addTask(e) {
    e.preventDefault();

    const listDiv = document.createElement("div");
    const newToDo = document.createElement("li");
    const btnCheck = document.createElement("button");
    const btnDelete = document.createElement("button");

    newToDo.style.display = "inline";

    newToDo.innerText = inputTask.value;
    if (inputTask.value === "") {
        return null;
    } else {
        listDiv.appendChild(newToDo);
    }

    btnCheck.innerText = "V";
    btnCheck.classList.add("btn-check");
    listDiv.appendChild(btnCheck);

    btnDelete.innerText = "X";
    btnDelete.classList.add("btn-delete");
    listDiv.appendChild(btnDelete);

    toDoList.appendChild(listDiv);
    inputTask.value = "";
}

function deleteComplete(e) {
    const item = e.target;
    const classBtn = item.classList[0];

    if (classBtn === "btn-check" && isChecked === false) {
        const todo = item.parentElement;

        todo.style.textDecoration = "line-through";
        isChecked = true;
    } else if (classBtn === "btn-check" && isChecked === true) {
        const todo = item.parentElement;

        todo.style.textDecoration = "none";
        isChecked = false;
    }

    if (classBtn === "btn-delete") {
        const todo = item.parentElement;
        const answer = confirm("Are you sure you want to delete?");

        if (answer === true) {
            todo.remove();
        }
    }
}