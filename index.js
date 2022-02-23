let randomNumber = Math.ceil((Math.random() * 100));

let inputValue = document.querySelector(".inputGuess");
const message = document.querySelector(".outputMessage");
const btn = document.querySelector(".guessbtn");

function guessOutcome(){
    const guessedNumber = Number(inputValue.value);
    console.log(randomNumber); 

    if(guessedNumber > 0 && guessedNumber <= 100){

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
        }
    
        setTimeout(function(){
            message.innerHTML = "";
        }, 2000);

    }
    else{
        message.innerHTML = "Plese enter a number between 1 - 100";
    }

}

btn.addEventListener('click', guessOutcome)

function newGame(){
    setTimeout(function(){
		message.innerHTML = "A new game has started!";
	}, 3000);
    // message.innerHTML = "A new game has started!";
    
}
window.onload = newGame()


