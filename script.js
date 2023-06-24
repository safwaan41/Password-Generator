//SET ALL ELEMENTS THAT INTERACT
var generateButtonElement = document.getElementById ("generate");
var symbolsElement = document.getElementById ("symbols");
var numbersElement = document.getElementById ("numbers");
var lowerCaseElement = document.getElementById ("lowercase");
var upperCaseElement = document.getElementById ("uppercase");
var lengthElement = document.getElementById ("length");
var finalElement = document.getElementById ("result");

//CHECK WHICH BOXES WERE CHOSEN
generate.addEventListener('click', () => 
{
	var length = lengthElement.value;

    var hasSymbols = symbolsElement.checked;

    var hasNumbers = numbersElement.checked;
    
    var hasUpperCase = upperCaseElement.checked;
    
    var hasLowerCase = lowerCaseElement.checked;

	finalElement.innerText = generatePassword (hasLowerCase, hasUpperCase, hasNumbers, hasSymbols, length);
});

var functionRand = 
{
	symbol: symbol,
    upper: upper,
    lower: lower,
	number: number,
	
}

//48 is where numbers start
function number() 
{
	return + String.fromCharCode(Math.floor(Math.random() * 10 ) + 48);
}
//symbols to use
function symbol() 
{
	var symbols = "?><+=_-)(*&^%$#@!~"
	return symbols[Math.floor(Math.random() * symbols.length)];
}
//97 is where lowercase start
//TIMES 26 LETTERS IN ALPHABET
function lower() 
{
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//65 is where uppercase start
function upper() 
{
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function generatePassword(lower, upper, number, symbol, length)
{
	var output = "";
	var count = number + symbol + lower + upper;
	var arrayType = [{upper} , {lower} , {number} , {symbol} ].filter(item => Object.values(item)[0]);
	
	if(count == 0) 
    {
		return "PICK A NUMBER WITH THE PROVIDED CRITERIA";
	}
	
	for (var i=0; i < length; i += count) 
    {
		arrayType.forEach(type => 
        {
			var banana = Object.keys(type)[0];
			output += functionRand [banana]();
		});
	}
	
	var password = output
	
	return password;
}
