// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Possible character variables
var possibleCharacters = "";
var newPassword = "";
var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    "<",
    ">",
    ",",
    ".",
    "/",
    "?",
    ":",
    ":",
    "~",
    "`",
  ];
// Prompts and confirms to determine the level of security the user wants from the password
function generatePassword() {
  var howManyCharacters = prompt(
    "How many characaters would you like the password to be, between 8-128"
  );
  if(howManyCharacters < 8 || howManyCharacters > 128) {
      prompt("ERROR! Numbeer has to be between 8 - 128");
  }

  var lowerCaseCharacters = confirm(
    "Would you like to include lowercase characters?"
  );
  var upperCaseCharacters = confirm(
    "Would you like to include uppercase characters?"
  );
  var numChar = confirm("Would you like to include numeric characters?");
  var specChar = confirm("Would you like to include special characters?");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
