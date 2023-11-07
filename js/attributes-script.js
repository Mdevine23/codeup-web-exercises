const profilePic = document.querySelector('#profile-pic');

setTimeout(()=> {
    profilePic.setAttribute("src", "./img/waterboy.jpeg")
},2000);

const profileName = document.querySelector('#profile-name');

setTimeout(() => {
    profileName.innerHTML = "Bobby Boucher";
}, 4000);

const profileDesc = document.querySelector('#profile-desc')
setTimeout(() => {
    profileDesc.classList.add('color-font');
}, 6000);

const profileCard = document.querySelector('#profile-card')

setInterval(() => {
    profileCard.classList.toggle("background-color");
}, 2000);

