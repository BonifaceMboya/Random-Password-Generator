//a random password generator on plain js
const generateBtn = document.getElementById("generateBtn");
const lowercaseBtn = document.getElementById("lowercase");
const uppercaseBtn = document.getElementById("uppercase");
const symbolsBtn = document.getElementById("symbols");
const numbersBtn = document.getElementById("numbers");

function uniquePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = 'abcdefghijklmnpqrstuvwxyz'
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numberChars = '0123456789'
    const specialChars = '@£${[]}!%#/'

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : ""
    allowedChars += includeUppercase ? uppercaseChars : ""
    allowedChars += includeNumbers ? numberChars : ""
    allowedChars += includeSymbols ? specialChars : ""

    if(allowedChars.length === 0){
        return 'Select Characters to Include.'
    }
    else if(length <= 0){
        return 'Length must be atleast 1'
    }

    for(let i=0; i< length; i++){
        const randomNumber = Math.floor(Math.random()* allowedChars.length);
        password += allowedChars[randomNumber];
    }
    return password;
}

generateBtn.onclick = function (){ 
const includeLowercase =  lowercaseBtn.checked ? true : false;
const includeUppercase = uppercaseBtn.checked ? true : false;
const includeNumbers = numbersBtn.checked ? true : false;
const includeSymbols = symbolsBtn.checked ? true : false;
const passwordLength = 10;

const newPassword = uniquePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

document.getElementById("newpassword").textContent = newPassword;
}