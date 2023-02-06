// Roll Command
function roll() {
    prob = Math.random()*6
    //Head Die
    if (prob < 3){
        document.getElementById("dice").src="images/bobRossLogo.png";
    //Card Die
    } else if (prob < 4){
        document.getElementById("dice").src="images/cards.png";
    //Hand Die
    } else if (prob < 5){
        document.getElementById("dice").src="images/hand.png";
    //Palette Die
    } else if (prob < 6){
        document.getElementById("dice").src="images/palette.png";
    }
} 

// Roll Die on "Enter"
var enterInput = document.getElementById("roll");
enterInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    roll();
  }
});