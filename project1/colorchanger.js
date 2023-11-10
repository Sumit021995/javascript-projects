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
 // like movement of cursor is an event
 // click on anything is also an event
 // Tab closing is also an event