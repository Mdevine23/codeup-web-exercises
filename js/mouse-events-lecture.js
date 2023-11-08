const clickbtn = document.querySelector("#clickme");
clickbtn.addEventListener("mouseenter", (e) => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const top = Math.floor(Math.random() * screenHeight);
    const left = Math.floor(Math.random() * screenWidth);
    clickbtn.style.left = `${left}px`;
    clickbtn.style.top = `${top}px`;
});
