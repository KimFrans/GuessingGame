describe('Guessing Game', function(){
    it('should say guess too high if guess more than random number', function(){
        let guessTest = GuessFactory()
        let randomNumber = 35

        guessTest.guessOutcome(50, randomNumber)

        assert.equal("Your guess is too high", guessTest.returnMessage())
    });

    it('should say guess too low if guess less than random number', function(){
        let guessTest = GuessFactory()
        let randomNumber = 98

        guessTest.guessOutcome(50, randomNumber)

        assert.equal("Your guess is too low", guessTest.returnMessage())
    });

    it('should ask for a number between 1-100 if number is not in the required range', function(){
        let guessTest = GuessFactory()
        let randomNumber = 73

        guessTest.guessOutcome(0, randomNumber)

        assert.equal("Plese enter a number between 1 - 100", guessTest.returnMessage())
    });

    it('should say correct with the secret number if the guess is correct', function(){
        let guessTest = GuessFactory()
        let randomNumber = 58

        guessTest.guessOutcome(58, randomNumber)

        assert.equal(`Correct, the secret number is ${randomNumber}`, guessTest.returnMessage())
    });

    it('should say "a new game has started when the page has been refreshed"', function(){
        let guessTest = GuessFactory()

        guessTest.newGame()

        assert.equal("A new game has started!", guessTest.GameMessage())
    });

    
});