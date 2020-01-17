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

generate.addEventListener("click", function(){
// to change string to number put a + (or wrap in parsint) before lengthele  
    var length = +lengthEle.value;
//when logging this will show if box is checked. if checked true, not checked false
    var hasLower = lowerCaseEle.checked;
    var hasUpper = upperCaseEle.checked;
    var hasNumber = numberEle.checked;
    var hasSymbols = symbolEle.checked;
    //this will generate password into the result element in HTML
    resultEle.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbols,
    length
  );
});

// function to copy password

copyEle.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = copyEle.innerText;
	
    if(!password) 
    { 
       return;
    }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand( "copy" );
	textarea.remove();
	alert('Copied password!');
});

// the function to generate the password
function generatePassword(lower, upper, number, symbols, length) {

// will begin building my password with empty string that we will add on.    
    var generatedPassword = " ";
// checks to see if its checked or not
    var typesCount = lower + upper + number + symbols;

    //console.log("how many boxes are checked", typesCount);
// to get the key (basically checking if its true or false) we need to put the index in {}
// not 100% sure how the filter method works, ???
    var typesArr = [{lower}, {upper}, {number}, {symbols}].filter(item => Object.values(item)[0]);

//console.log("putting the value into a list", typesArr);

// if statement to not generate password if none of the boxes are checked.
if (typesCount === 0) {
    return " ";
}

// loop over the length input and call the function to generate each string
// Need help understanding this for loop?? 
    for (var i=0; i < length; i += typesCount) {
        typesArr.forEach(type => {
    // need help understanding this function.
        var funcName = Object.keys(type)[0];

     //console.log(funcName);

        generatedPassword += randomFunction[funcName]();
    });
}
//need to learn what slicing does.
 let finalPassword = (generatedPassword.slice(0, length));

 return finalPassword;
}


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