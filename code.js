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
table for charcode http://www.net-comber.com/charset.html
*/

//html Elements
var resultEle = document.getElementById("result");
var myRangeEle = document.getElementById("myRange");
var lowerCaseEle = document.getElementById("lowerCase");
var upperCaseEle = document.getElementById("upperCase");
var numberEle = document.getElementById("number");
var specialEle = document.getElementById("special");
var generateEle = document.getElementById("generate");
var clipBoardEle = document.getElementById("clipBoard");


var randomFunc = {
    lower: generateRandomLower,
    Upper: generateRandomUpper,
    Number: generateNumber,
    special: generateSpecialChara
};

generateEle.addEventListener("click", function range() {
    var length = +myRangeEle.value;
    document.getElementById("myRange").value;
    document.getElementById("demo").innerHTML = length;
    var hasLower = lowerCaseEle.checked;
    var hasNumber = numberEle.checked;
    var hasSpecial = specialEle.checked;
    var hasUpper = upperCaseEle.checked;
    console.log(hasLower, hasNumber, hasSpecial, hasUpper);
  });
  

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
//slider function
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}