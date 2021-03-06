// Variables declaration
var rPs = ['R','P','S'];
var uInput = "";
var playAgain = true;
var wins = 0;
var losses = 0;
var ties = 0;

//Function to play game by asking user to input letter
var playGame = function() {
    var uInput = window.prompt("Enter R, P or S").toUpperCase();
    // When user does not enter info or cancels, it ends
    if (!uInput){
        return;
    }
    //Pick a random computer result
    var randomPick = Math.floor(Math.random() * rPs.length);
    var computerPick = rPs[randomPick];
    window.alert("The computer chose: " + computerPick);
    
    // Comparison user and computer retults and calculates score
    if (uInput === computerPick) {
        alert("You tied!");
        ties++;
    } else if (
        (uInput === 'R' && computerpick === 'S') ||
        (uInput === 'P' && computerPick === 'R') ||
        (uInput === 'S' && computerPick === 'P')
    ) {
        window.alert("You won!");
        wins++;   
    } else {
        window.alert("You lost");
        losses++;
    }

    // Shows score and prompts the user to continue or end game
    window.alert ("Ties: " + ties +" wins: " + wins + " losses: " + losses);
    var playAgain = window.confirm("Do you want to continue playing?");
    if (playAgain) {
        playGame();
    }
}

// Initial function invoke
playGame();
