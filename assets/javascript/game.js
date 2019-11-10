$(document).ready(function() {
    // Random number to be shown at the start of the g
    // Number needs to be between 19 - 120
    var random = Math.floor(Math.random() * 101 + 19)
    $("#random-number").html(random);
    
    
    // Create variables for userTotal, wins and losses.
    // These are tallied up to keep score.
    var totalScore = 0;
    var Wins = 0;
    var Losses = 0;
    
    
    // Set up a random number for each jewel.
    // Number needs to be between 1 - 12.
    var crystal1 = Math.floor(Math.random() * 12);
        console.log(crystal1);
    var crystal2 = Math.floor(Math.random() * 12);
        console.log(crystal2);
    var crystal3 = Math.floor(Math.random() * 12);
        console.log(crystal3);
    var crystal4 = Math.floor(Math.random() * 12);
        console.log(crystal4);
    
    
    $("#wins").html(Wins);
    $("#losses").html(Losses);
    
    // Add wins function
    function win () {
        if (totalScore === random) {
            alert("You win!");
            Wins++;
            $("#wins").html(Wins);
            reset ();
        }
    }
    
    // Add losses function
    function lose () {
        if (totalScore > random) {
            alert("You lose!");
            Losses++;
            $("#losses").html(Losses);
            reset ();
        }
    }
    
    // Reset the game.
    function reset () {
        random = Math.floor(Math.random() * 101 + 19);
        console.log(random);
        $("#random-number").html(random);
        var crystal1 = Math.floor(Math.random() * 12);
        var crystal2 = Math.floor(Math.random() * 12);
        var crystal3 = Math.floor(Math.random() * 12);
        var crystal4 = Math.floor(Math.random() * 12);
        $("#total-score").html(totalScore = 0);
    }
    
    
    // Create click events for the crystals.
    $("#crystal1").on("click", function() {
        totalScore = totalScore + crystal1;
        console.log("New total score = " + totalScore);
        $("#total-score").html(totalScore);
            if (totalScore === random) {
                win ();
            }
            else if (totalScore > random) {
                lose ();
            }
        });
    $("#crystal2").on("click", function() {
        totalScore = totalScore + crystal2;
        console.log("New total score = " + totalScore);
        $("#total-score").html(totalScore);
            if (totalScore === random) {
                win ();
            }
            else if (totalScore > random) {
                lose ();
            }
        });
    $("#crystal3").on("click", function() {
        totalScore = totalScore + crystal3;
        console.log("New total score = " + totalScore);
        $("#total-score").html(totalScore);
            if (totalScore === random) {
                win ();
            }
            else if (totalScore > random) {
                lose ();
            }
        });
    $("#crystal4").on("click", function() {
        totalScore = totalScore + crystal4;
        console.log("New total score = " + totalScore);
        $("#total-score").html(totalScore);
            if (totalScore === random) {
                win ();
            }
            else if (totalScore > random) {
                lose ();
            }
        });
    });