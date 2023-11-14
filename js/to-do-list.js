const toDoBtn = document.querySelector('button.to-do');
toDoBtn.addEventListener('click', (e) => {
    const newItem = document.createElement('li');
    newItem.classList.add("to-do-item", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
    const start = document.querySelector('ul.to-do-list');
    newItem.innerHTML = `
                    <p class="m-0">Finish this exercise</p>
                    <button class="btn btn-danger">Done</button>
    `
    start.appendChild(newItem);
});
