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