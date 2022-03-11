let randomNumber = Math.ceil((Math.random() * 100));

let inputValue = document.querySelector(".inputGuess");
const message = document.querySelector(".outputMessage");
const btn = document.querySelector(".guessbtn");

let factoryGuess = GuessFactory()

function randomGuess(){
    let guessedNumber = Number(inputValue.value);
    console.log(randomNumber); 
    factoryGuess.guessOutcome(guessedNumber, randomNumber)
    message.innerHTML = factoryGuess.returnMessage()
    if(factoryGuess.returnMessage().startsWith('Correct')){
        setTimeout(function () {
            randomNumber = Math.ceil((Math.random() * 100));
            message.innerHTML = factoryGuess.newNumberMessage()
            
        }, 5000);
        setTimeout(function(){
            message.innerHTML = "";
        }, 2000);

    };

}
btn.addEventListener('click', randomGuess)

function reload(){
    factoryGuess.newGame()
    message.innerHTML = factoryGuess.GameMessage()
    setTimeout(function(){
        message.innerHTML = "";
    }, 2000);
}
window.onload = reload()


