// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var howManyCharacters = prompt(

    "How many characaters would you like the password to be, between 8-128");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
