// You have been asked to create a random password generator. The password generator must ask the user for the desired length of the password (minimum four characters). Each password must have at least one digit excluding zero and one (2 - 9) at least one lowercase letter other than a lower case L, at least one uppercase letter other than O and at least one of these characters between the brackets (!@#$%^&*). What steps would you follow to produce a valid password?

let password = ()=>{
    let alfa = 'qwertyuiopasdfghjkzxcvbnm'
    let alfaC = 'QWERTYUIPASDFGHJKLZXCVBNM'
    let specialC='!@#$%^&*'
    let number = '23456789'
    let password =''
    let alfaN = parseInt(Math.random()*25);
    let alfaCN = parseInt(Math.random()*25);
    let n=parseInt(Math.random()*10 + 4);
    for(let i=0; i< n ; i++){
        password+=
    }

}