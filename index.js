// let randomNumber = document.querySelector(".random");

let randomNumber = Math.ceil((Math.random() * 100));
// console.log(generator);
// randomNumber.innerHTML = generator
// randomNumber = generator;

const inputValue = document.querySelector(".inputGuess");
const message = document.querySelector(".outputMessage");
const btn = document.querySelector(".guessbtn");

function guessOutcome(){
    const guessedNumber = Number(inputValue.value);
    
    if(guessedNumber > randomNumber){
        message.innerHTML = "Your guess is too high";
    }
    else if(guessedNumber < randomNumber){
        message.innerHTML = "Your guess is too low";
    }
    else {
        message.innerHTML = `Correct, the secret number is ${randomNumber}`;
    }

    setTimeout(function(){
		message.innerHTML = "";
	}, 2000);
}

btn.addEventListener('click', guessOutcome)

