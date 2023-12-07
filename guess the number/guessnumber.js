let form = document.querySelector('.form');

form.addEventListener('submit',function(){
    let guessField = parseInt(document.getElementById('guessField').value);
    let guesses = document.querySelector('.guesses');
    let lastResult = document.querySelector('.lastResult');
    let randomNumber = ((Math.random()*100) + 1);
    let guessSubmit = document.querySelector('.guessSubmit');



});
