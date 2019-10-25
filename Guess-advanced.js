/* Guess advanced by Max */

var turns = 0;
var guess = 0;
var games = 0;
var totalTurns = 0;
var again = true;
if(again == true){
	var answer = Math.floor(Math.random()*100)+1;
	console.log(answer);
	while (guess != answer){
		guess = prompt("Guess my number (1-100).");
		if (guess == "q"){
			alert("You quit.");
			break;
		}
		if (validate(guess) == true){
			turns++;
			games++;
			if (guess < answer){
				alert("Too low!");
			}
			else if (guess > answer){
				alert("Too high!");
			}
			else if (guess == answer){
				alert(gameStats(turns, totalTurns);
				again = newGame();
			}
		}
		else alert("Invalid guess, try again.");
	}
	if (guess == "q"){
		break;
	}
	else again = alert(newGame());
}

/* Function validate
 * Ensures guess is a valid integer within answer range
 * @param guess
 * @return boolean
 */
function validate(guess){
	if (guess > 0 && guess < 101){
		return true;
	}
	else {
		return false;
	}
}

function gameStats (turns, totalTurns){
	alert("you guessed it in "+turns+" turns");
	var totalTurns = totalTurns + turns;
	var averageTurns = totalTurns/games
var averageGame =("you won "+games+" games with an average of "+averageTurns+" turns per game");
return averageGame;
}

function newGame(){
	again = prompt("Play again? (Y=yes)");
	if(again == "y"){
	return true;
	}
	else{
		return false;
		alert("thanks for playing");
	}
}