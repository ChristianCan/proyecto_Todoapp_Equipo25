//variables
const inputTask = document.querySelector("#input-task");
const btnTask = document.querySelector("#btn-task");
const toDoList = document.querySelector(".todo-box");

//event listeners
btnTask.addEventListener("click", addTask);
toDoList.addEventListener("click", deleteComplete);

//functions
function addTask(e) {
    e.preventDefault();

    const listDiv = document.createElement("div");
    const newToDo = document.createElement("li");
    const btnCheck = document.createElement("button");
    const btnDelete = document.createElement("button");

    //example styles (remove this)
    newToDo.style.display = "inline";

    //adding input value
    newToDo.innerText = inputTask.value;
    if (inputTask.value === "") {
        return null;
    } else {
        listDiv.appendChild(newToDo);
    }

    //adding check button
    btnCheck.innerText = "V";
    btnCheck.classList.add("btn-check");
    listDiv.appendChild(btnCheck);

    //adding delete button
    btnDelete.innerText = "X";
    btnDelete.classList.add("btn-delete");
    listDiv.appendChild(btnDelete);

    //adding to toDo div
    toDoList.appendChild(listDiv);
    inputTask.value = "";
}

function deleteComplete(e) {
    const item = e.target;

    //check button
    if (item.classList[0] === "btn-check") {
        const todo = item.parentElement;

        todo.style.textDecoration = "line-through";
    }

    //delete button
    if (item.classList[0] === "btn-delete") {
        const todo = item.parentElement;

        todo.remove();
    }
}