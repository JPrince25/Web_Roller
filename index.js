// Roll Command
function roll() {
    prob = Math.random()*6
    //Head Dice
    if (prob < 3){
        document.getElementById("dice").src="images/bobRossLogo.png";
    //Card Dice
    } else if (prob < 4){
        document.getElementById("dice").src="images/cards.png";
    //Hand Dice
    } else if (prob < 5){
        document.getElementById("dice").src="images/hand.png";
    //Palette Dice
    } else if (prob < 6){
        document.getElementById("dice").src="images/palette.png";
    }
} 

var enterInput = document.getElementById("roll");
enterInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    roll();
  }
});