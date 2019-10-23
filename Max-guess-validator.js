/* Guess Validator Function: Merit badge 2
 * Adds counting turns, quit with q, and validating guess
 * By Max
 */

// Declare var answer as random integer between 1 and 100.
var answer = Math.floor(Math.random()*100)+1;
// Alert the answer while testing.
console.log(answer);
// Declare var guess, set to 0.
var guess = 0;
// Declare var turns, set to 0.
var turns = 0;
// Define while loop that runs while guess is not equal to answer
while (guess != answer){
  	// Prompt user for guess.
	guess=prompt("Guess my number (1-100)");
	// break out of loop if guess equals q. 
	if(guess == "q"){
		break;
	}
	// if guessValidator returns true
	if (validator(guess)==true){
		// Add 1 to turns
	turns++;
		// If guess lower than answer, say too low. 
		if (guess<answer) alert("too low");
		// Otherwise, if guess greater than answer, say too high. 
		else if (guess>answer) alert("too high");
	// Close If block
	}
	// alert "Invalid Guess.  Try again!" if guessValidator does not return true.
	else alert("Invalid Guess. Try again");
	// Close While Loop block
}
// If they guessed it, tell them they got it in however many turns. 
if (guess == answer) alert("You got it in "+turns+" turns.");
// Otherwise call them a quitter
else alert("quitter")

/* Function validator
 * Checks if guess is valid integer within range (1-100 default)
 * If guess not valid, return false;
 * If guess valid, return true
 * @param guess
 * @return boolean 
 */

	// return true if guess is a valid integer within range 
	// otherwise, guess is not valid. Return false. 
	
function validator(guess){
	if(guess > 0 && guess < 101){
		return true;
	}
	else return false;
}
