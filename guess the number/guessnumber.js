let form = document.querySelector('.form');
let submit = document.getElementById('subt');

form.addEventListener('submit',function(){
    let guessField = parseInt(document.getElementById('guessField').value);
    let guesses = document.querySelector('.guesses');
    let lastResult = document.querySelector('.lastResult');
    let randomNumber = ((Math.random()*100) + 1);
    
    //this is a button as you can seen on live server from index.html
    // let guessSubmit = document.querySelector('.guessSubmit');
    if(guessField === randomNumber){
        let lowOrHi = document.querySelector('.lowOrHi');
        lowOrHi.innerHTML = 'Your guess is correct';
        
    } else if(guessField > randomNumber){
        lowOrHi.innerHTML = 'Your guess is greater than Random Number';

    }
     else if(guessField < randomNumber){
        lowOrHi.innerHTML = 'Your guess is less  than Random Number';

    }




});
