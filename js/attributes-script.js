
(()=> {
const profilePic = document.querySelector('#profile-pic');

let newImg = setTimeout(()=> {
    profilePic.setAttribute("src", "./img/waterboy2.jpeg")
},2000);

const profileName = document.querySelector('#profile-name');

let newPro = setTimeout(() => {
    profileName.innerHTML = "Bobby Boucher";
    profileName.classList.add('color-font');
}, 4000);

const profileDesc = document.querySelector('#profile-desc')

let newStyle = setTimeout(() => {
    profileDesc.innerHTML = "Water is better!"
    profileDesc.classList.add('color-font');
}, 6000);

const profileCard = document.querySelector('#profile-card')

let newColor = setInterval(() => {
    profileCard.classList.toggle("background-color");
}, 2000);
})();
