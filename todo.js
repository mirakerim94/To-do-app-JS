const todoList = document.querySelector("#ul-todo");
const input = document.querySelector("#todo-input");
const addButton = document.querySelector("button");

const createTask = (task) => {
    const newTask = document.createElement("li");
    newTask.textContent = task;

    const editIcon = document.createElement("span");
    editIcon.innerHTML = '<i class="fas fa-edit"></i>';
    editIcon.classList.add("icon", "is-small", "is-clickable", "is-pulled-right");
    editIcon.addEventListener("click", () => {
        const newTaskInput = prompt("Enter new task", task);
        if (newTaskInput !== null && newTaskInput !== "") {
            newTask.textContent = newTaskInput;
        }
    });

    const deleteIcon = document.createElement("span");
    deleteIcon.innerHTML = '<i class="fas fa-trash"></i>';
    deleteIcon.classList.add("icon", "is-small", "is-clickable", "is-pulled-right");
    deleteIcon.addEventListener("click", () => {
        newTask.remove();
    });

    const doneIcon = document.createElement("span");
    doneIcon.innerHTML = '<i class="fas fa-check"></i>';
    doneIcon.classList.add("icon", "is-small", "is-clickable", "is-pulled-right");
    doneIcon.addEventListener("click", () => {
        newTask.classList.toggle("is-done");
    });

    newTask.appendChild(editIcon);
    newTask.appendChild(deleteIcon);
    newTask.appendChild(doneIcon);
    todoList.appendChild(newTask);
};

if (addButton) {
    addButton.addEventListener("click", () => {
        const task = input.value;
        if (task !== "") {
            createTask(task);
            input.value = "";
        } else {
            alert("Please enter a task");
        }
    });
}

/* WORK ON THESE PROBLEMS: 

1)the done icon doesn´t work
2)when edited it saves the info but without icons
3) the icons are too close to the li
4) when refreshing the page the items dissapear


*/
