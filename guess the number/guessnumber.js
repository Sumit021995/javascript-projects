let form = document.querySelector('.form');
let submit = document.getElementById('subt');
let StartOver = document.querySelector('.resultParas');
let p = document.createElement('p');

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
