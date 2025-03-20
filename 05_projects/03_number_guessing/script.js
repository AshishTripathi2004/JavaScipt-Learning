
const form = document.querySelector('form')

let winner = Math.floor((Math.random())*100 + 1)
const guess = document.querySelector("#nums")
const count = document.querySelector("#guess")
const attempts = document.querySelector("#attempts")
const startOver =  document.querySelector("#result")
const message = document.querySelector(".message")


let prevGuess = []
let canPlay = true

if(canPlay){
    form.addEventListener("submit", function(e){
        e.preventDefault() 
        const val = parseInt(guess.value)
        validateGuess(val)
    })
}

function validateGuess(val){
    if(isNaN(val)){
        alert("Please enter a valid number....")
    }else if(val < 1){
        alert("Please enter a valid number....")
    }else if(val > 100){
        alert("Please enter a valid number....")
    }else{
        prevGuess.push(val)
        if( prevGuess.length === 11){
            displayMessage(`GAME OVER..The correct number was ${winner}`)
            endGame()
        }else{
            displayGuess(val)
            displayAttempts()
            checkGuess(val)
        }
    }
}

function checkGuess(val){
    if(val ===  winner){
        displayMessage("Winner Winner Chicken Dinner 🥇")
        endGame()
    }else if( val < winner){
        displayMessage("Too Low......")
    }else{
        displayMessage("Too High.....")
    }
}

function displayMessage(str){
    message.textContent = str;
}

function displayAttempts(){
    const n = 10 - prevGuess.length
    attempts.textContent = `Attempts remaining: ${n}`
    
}

function displayGuess(val){
    count.textContent = `Previous Guess: ${val}`
}

function endGame(){
    guess.value = ''
    guess.setAttribute("disabled", '')
    const new_button = document.createElement("button")
    new_button.innerHTML = "Play Again"
    new_button.id = "play-again"
    canPlay = false
    startOver.appendChild(new_button)
    newGame()
}

function newGame(){
    const button = document.querySelector("#play-again")
    button.addEventListener("click", function(e){
        winner = Math.floor((Math.random())*100 + 1)
        prevGuess = []
        guess.removeAttribute("disabled")
        attempts.textContent = `Attempts remaining: ${10}`
        count.textContent = "Previous Guess: NIL"
        canPlay = true
        startOver.removeChild(button)
        message.textContent = ""
    })
}





