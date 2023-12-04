const form = document.querySelector('form'); 

form.addEventListener('submit', (s)=>{
    s.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = parseInt(document.querySelector('#result')); 

    result = (weight/((height/100)^2)); 


}) 