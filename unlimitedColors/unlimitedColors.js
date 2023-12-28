// Generate a random color
let randomColor = function(){
let hex = '0123456789ABCDEF';
let color ='#'
for(let i = 0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)]
}
return color;
// console.log(color);
}


// console.log(randomColor());