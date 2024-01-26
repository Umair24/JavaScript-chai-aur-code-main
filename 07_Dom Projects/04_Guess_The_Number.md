# Dom Project 4

[Project 4 Link](https://stackblitz.com/edit/dom-project-chaiaurcode-x9g8ua?file=4-GuessTheNumber%2F04_index.html)


### Home page source code are present in my GitHub repo.
[Click Here](https://github.com/Umair24/JavaScript-chai-aur-code)


# Source Code
```HTMl
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="04_style.css">
    <link rel="stylesheet" href="../styles.css">
</head>
<body style="background-color: #212121; color: #fff;">
  <nav>
    <a href="/" aria-current="page">Home</a>
  </nav>
    
    <div id="wrapper">
      <h1>Number Guessing Game</h1>
    <p>guess a random number between 1 and 100.</p>
    <p>You have 10 attempts to guess the right number.</p>
    </br>
        <form class="form">
            <label2 for="guessField" id="guess">Guess a Number</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p >Previous Guesses: <span class="guesses"></span></p>
            <p >Guesses Remaining: <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>
    <script src="04_script.js"></script>
</body>
</html>
```

```CSS
html {
  font-family: sans-serif;
}

body {
  width: 300px;
  max-width: 750px;
  min-width: 480px;
  margin: 0 auto;
  background-color: #212121;
}

.lastResult {
  color: white;
  padding: 7px;
}

.guesses {
  color: white;
  padding: 7px;
}

button {
  background-color: #141414;
  color: #fff;
  width: 250px;
  height: 50px;
  border-radius: 25px;
  font-size: 30px;
  border-style: none;
  margin-top: 30px;
  /* margin-left: 50px; */
}

#subt {
  background-color: orangered;
  color: #ffffff;
  width: 190px;
  height: 50px;
  border-radius: 20px;
  font-size: 20px;
  border-style: none;
  margin-top: 50px;
  /* margin-left: 75px; */
}

#guessField {
  color: #000;
  width: 250px;
  height: 50px;
  font-size: 30px;
  border-style: none;
  margin-top: 25px;

  /* margin-left: 50px; */
  border: 5px solid #6c6d6d;
  text-align: center;
}

#guess {
  font-size: 55px;
  /* margin-left: 90px; */
  margin-top: 120px;
  color: #fff;
}

/* .guesses {
  background-color: #7a7a7a;
} */

#wrapper {
  box-sizing: border-box;
  text-align: center;
  width: 450px;
  height: 550px;
  background-color: #474747;
  color: #fff;
  font-size: 25px;
}

h1 {
  background-color: #161616;
  color: #fff;
  text-align: center;
}

p {
  font-size: 16px;
  text-align: center;
}
```

```JavaScript
let randomNumber = parseInt(Math.random() * 100 + 1);

let submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
let guessSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

let p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
  submit.addEventListener('click', function(event){
    event.preventDefault();
    guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess) || guess < 1 || guess > 100){
    alert('Please enter a valid number!')
  }
  else {
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMsg(`Game Over.Random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){   
  if(guess === randomNumber){
    displayMsg(`You guessed it right and Your guessed number is ${guess}`)
    endGame()
  }
  else if(guess < randomNumber){
    displayMsg(`Number is too low and your guessed number is ${guess}`)
  }
  else if(guess > randomNumber){
    displayMsg(`Number is too high and your guessed number is ${guess}`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remaining.innerHTML = `${10-numGuess}`
}

function displayMsg(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
  startOver.appendChild(p)
  playGame = false;
  newGame();
}

function newGame(){
  let newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(event){
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11-guess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    playGame = true
  })
}
```