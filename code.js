

//generate random lower
function generateRandomLower() {
   return String.fromCharCode(Math.floor(Math.random()* 26 + 97));
}


//generate random upper
function generateRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()* 26 + 65));
}

//generate random number
function generateNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10 +48));
}
//generate Special Characters
function generateSpecialChara() {
    var special= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    return special[Math.floor(Math.random()*special.length)]
}