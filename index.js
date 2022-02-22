let randomNumber = Math.ceil((Math.random() * 100));

let inputValue = document.querySelector(".inputGuess");
const message = document.querySelector(".outputMessage");
const btn = document.querySelector(".guessbtn");
const restartBtn = document.querySelector(".restart")

function guessOutcome(){
    const guessedNumber = Number(inputValue.value);
    console.log(randomNumber);
    if(guessedNumber > randomNumber){
        message.innerHTML = "Your guess is too high";
    }
    else if(guessedNumber < randomNumber){
        message.innerHTML = "Your guess is too low";
    }
    else {
        message.innerHTML = `Correct, the secret number is ${randomNumber}`;
        setTimeout(function(){
            randomNumber = Math.ceil((Math.random() * 100));
                message.innerHTML = "guess the new number";
        }, 5000);
        // newRandomNumber()
    }

    setTimeout(function(){
		message.innerHTML = "";
	}, 2000);
}

btn.addEventListener('click', guessOutcome)

function newGame(){
    // setTimeout(function(){
	// 	message.innerHTML = "A new game has started!";
	// }, 5000);
    message.innerHTML = "A new game has started!";
    
    // guessOutcome();
}
window.onload = newGame()

// restartBtn.addEventListener('click', newGame)

// function newRandomNumber(){
//     const guessedNumber = Number(inputValue.value);
//     if(guessedNumber == randomNumber){
//         console.log("match");
//         randomNumber
//         console.log(randomNumber);
//         setTimeout(function(){
//             message.innerHTML = "guess the new number";
//         }, 5000);
//     }
    
// }

