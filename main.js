let mysteryElement = document.getElementById('mystery-word');


// randomly pick word from difficulty array
let mysteryWord = words[Math.floor(Math.random()*words.length)];
mysteryWord = mysteryWord.toUpperCase();

let maxGuesses = 6;
if (mysteryWord.length > 6) {
    maxGuesses = mysteryWord.length
}

// creates divs in mystery-word div filled with underscores for each letter and with a class = letter
for (let letter of mysteryWord) {
    let blankDiv = document.createElement('div');
    let blank = document.createTextNode('_');
    blankDiv.appendChild(blank);
    blankDiv.classList.add(`${letter}`);
    mysteryElement.appendChild(blankDiv);
}

let buttons = document.querySelectorAll('.button')

// function that returns the DOM node of the parent row
function findParentRow(button){
    let rows = document.getElementsByClassName('letter')
    for (let row of rows) {
        if (row.contains(button)) {
            return row
        }
    }
}

// replaces guessed letter with identical div of class "deactivated"
function deactivateButton(button) {
    let newButton = document.createElement('div');
    let buttonText = document.createTextNode(button.innerText);
    newButton.appendChild(buttonText);
    newButton.setAttribute('class', 'deactivated')
    let buttonToRemove = document.getElementById(button.innerText);
    let row = findParentRow(button);
    row.insertBefore(newButton, buttonToRemove);
    buttonToRemove.remove();
}

// adds event listener to a button
function buttonPress(button) {
    button.addEventListener('click', () => {
        if (mysteryWord.includes(button.innerText) === true) {
            let matchDivs = document.querySelectorAll('.' + button.innerText);
            for (let div of matchDivs) {
                div.innerText = button.innerText;
            }
            maxGuesses++
        } else {
            let wrongGuess = document.createElement('div');
            graveyard.appendChild(wrongGuess);
            wrongGuess.innerText = button.innerText;
            maxGuesses--
        }
        deactivateButton(button);
        if (maxGuesses === 0) {
            console.log("You Lose!")
        }
    })
}

for (let button of buttons) {
    buttonPress(button);
}

