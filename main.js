const eachBox =  document.querySelectorAll('.box');

let flippedCard = false;
let firstCard, secondCard;

function animation() {
   this.classList.add('flip');

   !flippedCard ? (flippedCard = true, firstCard = this) : (flippedCard = false, secondCard = this, checkBox());
   
}
function checkBox() {
    firstCard.dataset.card === secondCard.dataset.card ? flippedCard() : unflipped(); 
}
function flipped() {
    firstCard.removeEventListener('click', animation);
        secondCard.removeEventListener('click', animation);
}
function unflipped() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        }, 500);
}
eachBox.forEach(eachBox => eachBox.addEventListener('click', animation));