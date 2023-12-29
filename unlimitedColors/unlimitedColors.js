// Generate a random color
let randomColor = function(){
let hex = '0123456789ABCDEF';
let color ='#'
for(let i = 0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)]
}
return color;
// console.log(color);
};

document.getElementById('stop').addEventListener('click', function(){
    clearInterval(changeColor);
    alert('changing color is stopped');
    changeColor=null;
});


let changeColor ;
document.getElementById('start').addEventListener('click',function(){
 if(changeColor === null){
    changeColor = setInterval(function(){
    document.body.style.backgroundColor = randomColor();
 },1000)
}
});