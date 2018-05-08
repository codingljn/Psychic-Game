// Declare variables
var totWins = 0;
var totLosses = 0;
var guessLeft = 0;
var guessFar = [];
var myChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// there should be an easier way to list the alphabet...but this will do for now.

// Log the guess - as I learned with Steve on 5/5/18
document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
// The psychic must also guess - taken from the rock, paper, scissors solved code.
    var psychicGuess = myChoices[Math.floor(Math.random() * myChoices.length)];
    guessFar.push(userGuess);
// If user guesses correctly 
    if(userGuess === psychicGuess) {
        totWins++;
        alert("You have guessed the right letter! You Win!")
        guessLeft = 9;
        guessFar.length = 0;
    }
// If user guesses incorrectly ›
    else if(guessLeft === 0) {
        totLosses++;
        alert("You did not guess the right letter. Try again!")
        guessLeft = 9;
        guessFar.length = 0;
    }
    else if(userGuess !== psychicGuess) {
        guessLeft--;
    }
// adding the information to the index.html file (thanks to Google)-I had a "ghost game" for over 1hr.
    var html = "<h1>The Psychic Game!</h1>" + 
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Total Wins: " + totWins +"</p>" +
    "<p>Total Losses: "+ totLosses +"</p>" +
    "<p>Guesses Left: "+ guessLeft +"</p>" +
    "<p>Your Guesses So Far: "+ guessFar +"</p>";

    document.querySelector("#userscreen").innerHTML = html;
}
