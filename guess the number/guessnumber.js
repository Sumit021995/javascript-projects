let form = document.querySelector('.form');
let submit = document.getElementById('subt');
let p = document.createElement('p');

// we need to show an array og gussed numbers
let prevGuess = [];
// let number of guesses
let numGuess = 1;
// if our game ends or say if our 10 guesses ends then we need to restart the game of gussing so we need a start over
let StartOver = document.querySelector('.resultParas');
// to start a new game we also need
let playGame = true;

function validateGuess(){
    
}
function checkGuess(){

}
function displayGuess(){

}
function displayMessage(){

}
function startNewGame(){

}
function endGame(){

}



form.addEventListener('submit',function(){
    let userInput = parseInt(document.getElementById('guessField').value);
    let guesses = document.querySelector('.guesses');
    let lastResult = document.querySelector('.lastResult');
    let randomNumber = ((Math.random()*100) + 1);
    
    //this is a button as you can seen on live server from index.html
    // let guessSubmit = document.querySelector('.guessSubmit');
    if(userInput === randomNumber){
        let lowOrHi = document.querySelector('.lowOrHi');
        lowOrHi.innerHTML = 'Your guess is correct';
        
    } else if(userInput > randomNumber){
        lowOrHi.innerHTML = 'Your guess is greater than Random Number';

    }
     else if(userInput < randomNumber){
        lowOrHi.innerHTML = 'Your guess is less  than Random Number';

    }




 
});
