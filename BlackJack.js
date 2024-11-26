let cards = [];

let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEL = document.getElementById("message-el");

let sumEL = document.querySelector(".sum-el");
let cardsEL = document.getElementById("cards-el");

let player = {
  name: "Salman",
  chips: 145,
};

let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function renderGame() {
  cardsEL.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEL.textContent += cards[i] + " ";
  }

  //cardsEL.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEL.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum == 21) {
    message = "Wohoo! You've got BlackJack";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEL.textContent = message;
}

function newCard() {
  if (isAlive == true && hasBlackJack == false) {
    let card = getRandomCard();
    sum += card;
    // push the card to the cards array
    cards.push(card);
    renderGame();
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 11;
  } else return randomNumber;
}
