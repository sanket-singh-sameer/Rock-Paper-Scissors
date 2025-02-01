let confirmation = confirm("Do you want to play games rock paper and scissors!");
//  console.log(confirmation);

if (confirmation === true) {
    let playerChoice = prompt("Please select rock paper or scissors!");



    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();

        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice=Math.floor(Math.random() *3 +1);
                // if(computerChoice===1){
                //     computerChoice="rock"
                // }
                // if(computerChoice===2){
                //     computerChoice="paper"
                // }
                // if(computerChoice===3){
                //     computerChoice="scissors"
                // }
                // OR

                let computer=computerChoice===1?"rock":computerChoice===2?"paper":"scissors";
                
                let result =
                playerOne === computer
                  ? "Tie game!"
                  : playerOne === "rock" && computer === "paper"
                  ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                  : playerOne === "paper" && computer === "scissors"
                  ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                  : playerOne === "scissors" && computer === "rock"
                  ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                  : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
              alert(result);
              let playAgain = confirm("Play Again?");
              playAgain ? location.reload() : alert("Ok, thanks for playing.");






        } else {
            alert("You didn't entered rock,paper or scissors.")
        }

    } else {
        alert("You didn't entered any hand or you entered a wrong hand or spelling");
    }

} else {
    alert("Okay, I got you, will play next time with you");
}