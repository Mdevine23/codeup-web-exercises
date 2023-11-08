const handlePeriodKey = (event) => {
    if (event.key === '.') {
        alert(`You pressed the period key!`);
    }
    console.log(event);
}
// MAIN
(()=> {
    const btns = document.querySelectorAll('.btn');
    for (let btn of btns) {
        btn.addEventListener('click', event => {
            // console.log(event);
            const name = event.target.getAttribute('data-name');
            alert(`${name} clicked the button!`);
        });
    }
    //keyboard event
    document.body.addEventListener('keydown', handlePeriodKey);
})();


