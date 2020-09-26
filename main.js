/* 
PROBLEM: Create a "new game screen" with a single "new game" choice.
EXAMPLE:
DATA-STRUCTURE:
ALGORITHM:
CODE: 
*/
window.onload = function () {
  document.getElementById("buttonModal").onclick = function () {
    document.getElementById("modal").style.display = "none"
  }
}

const cards = document.querySelectorAll(".cards")

let hasFlipped = false
let stopClicks = false
let cardOne
let cardTwo

function flipCard() {
  if (stopClicks) {
    return
  }
  this.classList.add("showText")
  
  if (!hasFlipped) {
    hasFlipped = true
    cardOne = this
    return

  } else {
    cardTwo = this
    hasFlipped = false

  isMatch()
  }
}

function isMatch() {
  if (cardOne.dataset.title === cardTwo.dataset.title) {
    keepShowing()
    return
  }
  unflipCards()
}

 function keepShowing() {
   cardOne.removeEventListener('click', flipCard)
   cardTwo.removeEventListener('click', flipCard)
 }

function unflipCards() {
  stopClicks = true

  setTimeout(() => {
    cardOne.classList.remove('showText')
    cardTwo.classList.remove('showText')

    stopClicks = false
  }, 1500)
}

(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 18);
    card.style.order = ramdomPos;
  });
})()


cards.forEach((card) => card.addEventListener('click', flipCard));








// document.querySelectorAll(".card").forEach(function (card) {
//   card.addEventListener("click", function () {
//     console.log(card)
//     if (!clickedCard) {
//       // console.log("clicked :", clickedCard)
//       clickedCard = card
//       // console.log("NOW IS", card)
//     } else {
//       if (clickedCard.querySelector(".card") ===
//       card.querySelector(".card")) {
//         console.log('match')
//       }
//     } 
//   })
// })

// document.querySelector(".memoryGame").addEventListener("click", function (e) {
//   const userClick = e.target

//   console.log(userClick)
//   const card = document.querySelectorAll(".card")
//   if (!clickedCard) {
//     clickedCard = card
//     console.log(clickedCard)
//   }
// })
// if (userClick) {
//   userGuesses.push(userClick)
//   console.log(userGuesses)

//  if (userGuesses[0] === userGuesses[1]) {
//    correctGuesses.push(userGuesses[0], userGuesses[1])
//    console.log(correctGuesses)
//    userGuesses = []
// } else {
//    for (let i =0; i <= userGuesses.length; i++) {
//     userGuesses[i].classList.remove('cardBottom')
//         userGuesses = []

//    }

//  }
//   }
// })

// const cards = document.querySelector(".memoryGame")

// function flipCard() {
//   this.classList.toggle("flip")
// }

// cards.forEach(card => card.addEventListener('click', flipCard);
