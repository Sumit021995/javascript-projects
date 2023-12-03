let form = document.querySelector('form');

form.eventListener('submit', (s)=>{
    s.preventDefault();
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = parseInt(document.querySelector('#result').value); 

    result = (weight/((height/100)^2));


})