function addtask() {
    let input = document.getElementById("inputTask").value;

    if (input) {
        let taskli = document.createElement("li");
        taskli.innerText = input;

        let listofTask = document.getElementById("tasklist");
        listofTask.appendChild(taskli);

        document.getElementById("inputTask").value = "";

        // Delete Button
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function () {
            deleteTask(this);
        };
        taskli.appendChild(deleteButton);

        // Done Button
        let doneButton = document.createElement("button");
        doneButton.innerText = "Done";
        doneButton.onclick = function () {
            markDone(this);
        };
        taskli.appendChild(doneButton);

    } else {
        alert("Hari Bol Prabhu pahale task add kar lijiye......");
    }
}

function deleteTask(button) {
    let li = button.parentElement;
    li.remove();
}

function markDone(button) {
    let li = button.parentElement;
    li.style.textDecoration = "line-through";
}