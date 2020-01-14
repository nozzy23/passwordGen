/*

Will make a random password generator for the website. The customer will chose how specific they want their password. The customer must chose at least one.

customer password must have between 8-128 characters. 
It must contain a 
captital letter,
lower case letter,
special character,
and a number.

once the customer chose their criteria the generated password must appear on the page (or alert)

Things to work on

1, list the possible selections The computer can select.(letters, number and special character)
2. 
*/

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
function generateSpecialChara() {
    var special= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    return special[Math.floor(Math.random()*special.length)]
}

console.log(generateRandomLower());
console.log(generateRandomUpper());
console.log(generateNumber());
console.log(generateSpecialChara());