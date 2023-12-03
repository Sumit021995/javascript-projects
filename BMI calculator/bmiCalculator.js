let form = document.querySelector('form');

form.eventListener('submit', (s)=>{
    s.preventDefault();
    let height = parseInt(document.querySelector('#height'));
    let weight = parseInt(document.querySelector('#weight'));
    let result = parseInt(document.querySelector('#result')); 

    result = (weight/((height/100)^2));


})