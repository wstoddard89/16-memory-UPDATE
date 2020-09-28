
window.onload = function () { // New game screen will load first
  document.getElementById("buttonModal").onclick = function () {
    document.getElementById("modal").style.display = "none"
  }
}

const cards = document.querySelectorAll(".cards") // Grabs each card

cards.forEach((card) => card.addEventListener('click', clickCard)); //Click event for each card, runs "clickCard" function

let hasBeenClicked = false
let thirdClick = false
let cardOne
let cardTwo
let matchPairsArray = []

function clickCard() {
  if (thirdClick) { // Protects bug of allowing a third click before determining if match or not
    return
  }
  if (this === cardOne) { // Prevents bug of allowing clicking on the same card twice for a match
    return
  }
  
  this.classList.add("showText") // Adds the class to show the number on the card when clicked
  
  if (!hasBeenClicked) {
    hasBeenClicked = true // When "hasBeenClicked" is set to true, sets as the first click
    cardOne = this

    console.log(hasBeenClicked, cardOne)
    return

  } else {
    //second click
    hasBeenClicked = false // When "hasBeenClicked" is set to false, sets as the second click
    cardTwo = this
    
    console.log(hasBeenClicked, cardTwo)

    cardsMatch()
  }
}

function cardsMatch() { //Compares if both clicked cards have the same data attribute
  if (cardOne.dataset.title === cardTwo.dataset.title) {
    console.log(cardOne.dataset.title)
    console.log(cardTwo.dataset.title)
    keepShowing()
    matchPairsArray.push(cardOne, cardTwo)
    console.log(matchPairsArray)
    winningScreen()
    return
  }
  nonMatchCards()
}

 function keepShowing() { // Removes click function if there is a match, causing them to stay showing
   cardOne.removeEventListener('click', clickCard)
   cardTwo.removeEventListener('click', clickCard)
   resetClicks()
 }

function nonMatchCards() { // Hides text again after setTimeout if cards don't match
  thirdClick = true

  setTimeout(() => {
    cardOne.classList.remove('showText')
    cardTwo.classList.remove('showText')

  resetClicks()
  }, 1500)
}


function resetClicks() {  // Resets the variables to false and null, so that you can't click on the same
  hasBeenClicked = false  // card, and so you can use the same card as first click twice in a row
  thirdClick = false
  cardOne = null
  cardTwo = null
}

function winningScreen() { // Display an alert screen saying you won if you pick all matching pairs
  if (matchPairsArray.length > 17) {
    console.log('should show alert')
    alert('You found all the matching pairs! Congratulations, you WON!')
  }
}

(function shuffle() { // IIFE function to shuffle the divs when the game loads
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 18);
    card.style.order = ramdomPos;
  });
})()