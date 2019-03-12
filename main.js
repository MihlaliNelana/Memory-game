const eachBox =  document.querySelectorAll('.box');

function animation() {
   this.classList.toggle('flip');
}
eachBox.forEach(eachBox => eachBox.addEventListener('click', animation));