let input = document.getElementById("todo-input");
let btn = document.getElementById("add-btn");
let ul = document.getElementById("todo-list");

input.focus();

function removeItem(e) {
    let el = e.currentTarget;
    el.parentNode.remove();
}

function addTodo() {
    input.focus();

    if (input.value !== "") {
        let li = document.createElement("li");
        li.className = "mb-4"
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.className = "btn button1 ms-3 px-2 py-0";

        li.textContent = input.value;
        li.appendChild(removeBtn);
        ul.appendChild(li);
        input.value = "";
        removeBtn.addEventListener("click", removeItem);
    } else {
        return;
    }
}

btn.addEventListener("click", addTodo);