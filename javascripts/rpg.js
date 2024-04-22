const passwordLengthVal = document.getElementById("passwordLengthVal");
const generateBtn = document.getElementById("generateBtn");
const includeLowercaseVal = document.getElementById("includeLowercaseVal");
const includeUppercaseVal = document.getElementById("includeUppercaseVal");
const includeNumberVal = document.getElementById("includeNumberVal");
const includeSymbolVal = document.getElementById("includeSymbolVal");
const result = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");
let password = "";

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+,./?;:";
    
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0){
        return 'Password Length must be at least 1!';
    }
    else if (length > 25){
        return 'Password Length must be less than 25 characters!'
    }

    if (allowedChars.length === 0){
        return 'At least 1 set of character needs to be selected!';
    }

    for (let i = 0; i < length; i++)
    {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

generateBtn.onclick = function(event) {
    event.preventDefault(); 
    let passwordLength = passwordLengthVal.value;
    let includeLowercase = includeLowercaseVal.checked;
    let includeUppercase = includeUppercaseVal.checked;
    let includeNumbers = includeNumberVal.checked;
    let includeSymbols = includeSymbolVal.checked; 

    let password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    result.textContent = password;
}

copyBtn.onclick = function(event){
    event.preventDefault();
    navigator.clipboard.writeText(result.textContent);
}

