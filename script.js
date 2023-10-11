let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#Input');
const submit = document.querySelector('#subt');
const prevGuess = document.querySelector('.prevGuess');
const lowOrHigh = document.querySelector('.loworhigh');
const startOver = document.querySelector('.startOver');


const p = document.createElement('p');

let guessSlot = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
    userInput.value = '';
    prevGuess.innerHTML += `${guess}, `;
    document.querySelector('.remainingChance').innerHTML = `${11 - numGuess}`
    numGuess++;
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 0) {
    alert(`Please enter a number greater than zero`);
  } else if (guess > 100) {
    alert(`Please enter a number less than 100`);
  } else {
    guessSlot.push(guess);
    if (numGuess === 10) {
      displayMessage(`Game Over and Random number is ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('Congratulation!, You guessed it right.');
    endGame();
    newGame();
  } else if (guess > randomNumber) {
    displayMessage('Number is too low');
  } else if (guess < randomNumber) {
    displayMessage('Number is too High');
  }
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2">Restart Now</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
    const restart = document.querySelector('#newGame')
    restart.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    guessSlot = []
    numGuess = 1
    prevGuess.innerHTML = ''
    document.querySelector('.remainingChance').innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.remove(p)
    lowOrHigh.innerHTML = ''
    playGame = true
  })
}
