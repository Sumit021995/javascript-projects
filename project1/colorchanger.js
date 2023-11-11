 const buttons = document.querySelectorAll('.button');
 const body = document.querySelector('body');

 // Some event basis
 // like movement of cursor is an event
 // click on anything is also an event
 // Tab closing is also an event
 console.log(buttons);
 /*
 NodeList(4) [span#gray.button, span#white.button, span#blue.button, span#yellow.button]
0: span#gray.button
1: span#white.button
2: span#blue.button
3: span#yellow.button
length: 4
[[Prototype]]: NodeList
  */
 

 buttons.forEach((button)=>{
    console.log(button);

    button.addEventListener('click',(event)=>{
        console.log(event);
        console.log(event.target);
        
        

    })
 });

 