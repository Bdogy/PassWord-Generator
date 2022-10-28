// Assignment code here

function generatePassword() {
  // declaring all character list
  var lowerCaseArr = [
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

  var upperCaseArr = [
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

  var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialArr = ["!", "@", "#", "$", "*", "%"];

  //User Length input
  var userLength = prompt("Enter Password Length! 8-128 characters only");
  //makes Data type number instead of str
  userLength = Number(userLength);
  console.log(userLength);

  if (userLength <= 8 || userLength >= 128) {
    alert("entered length is not accepted");
    return;
  }

  //confirms for charas
  var upperCase = confirm("Would you like Uppercase? ");
  var lowerCase = confirm("Would you like Lowercase? ");
  var numbers = confirm("Would you like numbers? ");
  var specialChara = confirm("Would you like specialChara? ");

  var wantedChara = [];

  //check booleans confirms
  if (upperCase) {
    wantedChara = wantedChara.concat(upperCaseArr);
  }
  if (lowerCase) {
    wantedChara = wantedChara.concat(lowerCaseArr);
  }
  if (numbers) {
    wantedChara = wantedChara.concat(numbersArr);
  }
  if (specialChara) {
    wantedChara = wantedChara.concat(specialArr);
  }
  console.log("wanted Charas " + wantedChara);
  // Final password randomizer

  var finalPassword = [];

  for (var i = 0; i <= userLength; i++) {
    //creates random number from 0 to length of chara list
    randomIndex = Math.floor(Math.random() * wantedChara.length);
    finalPassword = finalPassword.concat(wantedChara[randomIndex]);
  }

  console.log(finalPassword);

  finalPassword = finalPassword.join("");
  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
