 const buttons = document.querySelectorAll('.button');
 const body = document.querySelector('body');

 buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',(event)=>{
        console.log(event);
        // console.log(event.target);
        
        

    })
 })

 // Some event basis
 // like 