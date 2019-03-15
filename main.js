const eachBox =  document.querySelectorAll('.box');
//please add comments so I understand the code better
function animation() {
   this.classList.toggle('flip');
}
eachBox.forEach(eachBox => eachBox.addEventListener('click', animation));
