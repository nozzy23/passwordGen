// DON elements
var resultEle = document.getElementById("password");
var lengthEle = document.getElementById("length");
var upperCaseEle = document.getElementById("uppercase");
var lowerCaseEle = document.getElementById("lowercase");
var numberEle = document.getElementById("numbers");
var symbolEle = document.getElementById("symbols");
var generateEle = document.getElementById("generate");
var copyEle = document.getElementById("copy");


//object of function that generate random character
var randomFunction = {
    lower: generateRandomLower,
    upper: generateRandomUpper,
    number: generateNumber,
    symbols: generateSpecialChara,
}

// When clicking generate button, will display a password

generateEle.addEventListener("click", function(){
// to change string to number put a + (or wrap in parsint) before lengthele    
    var length = +lengthEle.value;
//when logging this will show if box is checked. if checked true, not checked false
    var hasLower = lowerCaseEle.checked;
    var hasUpper = upperCaseEle.checked;
    var hasNumber = numberEle.checked;
    var hasSymbols = symbolEle.checked;
    console.log(hasLower, hasUpper, hasNumber, hasSymbols)
});



// http://www.net-comber.com/charset.html
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
    var symbols= " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ "
    return symbols[Math.floor(Math.random()*symbols.length)]
}