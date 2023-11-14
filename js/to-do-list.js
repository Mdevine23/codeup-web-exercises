let todos = [];

const renderTodoElement = (todo) => {
    const listItem = document.createElement("li");
    listItem.classList.add("to-do-item", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
    listItem.innerHTML = `
        <p class="m-0">${todo}</p>
        <button class="btn btn-danger" data-done>Done</button>
    `;
    const deleteBtn = listItem.querySelector("button[data-done]");
    deleteBtn.addEventListener("click", (e) => {
        listItem.remove();
    });
    return listItem;
};
const updateTodos = (todos) => {
    document.querySelector("#to-do-list").innerHTML = "";
    const itemsFragment = document.createDocumentFragment();
    for (let todo of todos) {
        itemsFragment.appendChild(renderTodoElement(todo));
    }
    document.querySelector("#to-do-list").appendChild(itemsFragment);
};
const addTodo = (todo, todos) => {
    const userInput = document.querySelector("#to-do").value;
    todos.push(todo);
    updateTodos(todos);
    return todos;
};

// MAIN
(() => {
    updateTodos(todos);
    const addBtn = document.querySelector("button[data-add]");
    const userInput = document.querySelector("#to-do");
    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        todos = addTodo(userInput.value, todos);
    });
})();