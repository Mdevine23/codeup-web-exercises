(()=>{
    const addBtn = document.querySelector('#addBox');
    addBtn.addEventListener('click', (e) => {
        const box = document.createElement('div');
        box.classList.add('box');
        box.innerHTML = `${document.querySelectorAll('.box').length + 1}`;
        const boxContainer = document.querySelector('#boxes');
        box.addEventListener('click', e=> {
            box.remove();
        });
        boxContainer.appendChild(box);
    });
})();