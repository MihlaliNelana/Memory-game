const eachBox =  document.querySelectorAll('.box');

let flippedCard = false;
let firstCard, secondCard;


function animation() {      // this function handles the changing of the animation.
   this.classList.add('flip');

   !flippedCard ? (flippedCard = true, firstCard = this) : (flippedCard = false, secondCard = this, checkBox()); // This checks if the cards are flipped 

}
function checkBox() { /// this function handles checking that 2 boxes are the same
    firstCard.dataset.card === secondCard.dataset.card ? flippedCard() : unflipped();    //This
}
function flipped() {    //once the cards have been found to be the same this function will remove the eventlistener which will prevent them from being clickable
    firstCard.removeEventListener('click', animation);
        secondCard.removeEventListener('click', animation);
}
function unflipped() {  //  this handles how long the cards will appear for when clicked which is in milliseconds
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        }, 500);
}
eachBox.forEach(eachBox => eachBox.addEventListener('click', animation)); //this is the event handler that handles the for button clicks on the 