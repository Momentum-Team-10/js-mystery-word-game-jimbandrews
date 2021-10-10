// separating word list into difficulty arrays by word length
let easy = [];
let medium = [];
let hard = [];

for (let word of words) {
    if (word.length < 6) {
        easy.push(word);
    } else if (word.length > 9) {
        hard.push(word);
    } else {
        medium.push(word);
    }
}

// choosing sample word to build website around. after it is functioning properly, need to figure out how to select random word based on user input of easy, medium, or hard.
let sampleWord = 'alarm';
sampleWord = sampleWord.toUpperCase()

let mysteryElement = document.getElementById('mystery-word');

for (let letter of sampleWord) {
    let blankDiv = document.createElement('div');
    let blank = document.createTextNode('_');
    blankDiv.appendChild(blank);
    blankDiv.classList.add(`${letter}`);
    mysteryElement.appendChild(blankDiv);
}

let buttons = document.querySelectorAll('.button')

// for (let button of buttons) {
//     button.addEventListener('click', () => {
//         if (sampleWordCap.includes(button.innerText)) {
//             let matchDivs = document.querySelectorAll('.' + button.innerText);
//             for (let div of matchDivs) {
//                 div.innerText = button.innerText;
//             }
//         }
//     })
// }


function buttonPress(button) {
    button.addEventListener('click', () => {
        if (sampleWord.includes(button.innerText) === true) {
            let matchDivs = document.querySelectorAll('.' + button.innerText);
            for (let div of matchDivs) {
                div.innerText = button.innerText;
            }
        } else {
            let wrongGuess = document.createElement('div');
            graveyard.appendChild(wrongGuess);
            wrongGuess.innerText = button.innerText;
        }
    })
}

for (let button of buttons) {
    buttonPress(button);
}



// for (let button of buttons) {
//     button.addEventListener('click', () => {
//         if (sampleWord.includes(button.innerText) === true) {
//             let matchDivs = document.querySelectorAll('.'+button.innerText);
//             for (let div of matchDivs) {
//                 div.innerText = button.innerText
//             }
//         }
//     })
// }