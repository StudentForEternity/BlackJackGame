let player = 
{
  name : "Alex",
  chips : 100
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard()
{
  let randomNum = Math.floor(Math.random() * 13)+1; 
  if(randomNum === 1)
  {
    return 11;
  }
  else if (randomNum  > 10)
  {
    return 10;
  }
  else {
    return randomNum;
  }

}
function startGame()
{
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame()
 {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  
  for(let i = 0; i < cards.length; i++)
  {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum <= 20)
   {
    message = "Wana draw again?";
  } 
  else if (sum === 21)
   {
    message = "Blackjack! You won!";
    hasBlackJack = true;
  } 
  else
   {
    message = "You are out of the game";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() 
{
  if(isAlive && hasBlackJack===false)
  {
    let newCard = getRandomCard();
    cards.push(newCard);
    sum += newCard;
    renderGame();
  }

}
