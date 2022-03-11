function GuessFactory() {
    // let randomNumber = Math.ceil((Math.random() * 100));

    let userMessage = ""
    let newGameMessage = ""
    let newNumber = ""

    function guessOutcome(guessedNumber, randomNumber) {

        if (guessedNumber > 0 && guessedNumber <= 100) {

            if (guessedNumber > randomNumber) {
                userMessage = "Your guess is too high";
                console.log(userMessage);

            }
            else if (guessedNumber < randomNumber) {
                userMessage = "Your guess is too low";
                console.log(userMessage);
            }
            else {
                userMessage = `Correct, the secret number is ${randomNumber}`;
                console.log(userMessage);
                setTimeout(function () {
                    // randomNumber = Math.ceil((Math.random() * 100));
                    newNumber = "guess the new number";
                    console.log(newNumber);
                }, 5000);
            }
            setTimeout(function () {
                message.innerHTML = "";
            }, 2000);

        }
        else {
            userMessage = "Plese enter a number between 1 - 100";
        }




    }

    function returnMessage() {
        return userMessage;
    }

    function newGame() {

        newGameMessage = "A new game has started!";
        // setTimeout(function () {
        //     newGameMessage = " ";
        // }, 3000);

    }

    function GameMessage() {
        return newGameMessage
    }

    function newNumberMessage() {
        return newNumber
    }


    return {
        guessOutcome,
        newGame,
        returnMessage,
        GameMessage,
        newNumberMessage
    }
}