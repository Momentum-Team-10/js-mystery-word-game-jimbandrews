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
let sampleWordCap = sampleWord.toUpperCase()

let mysteryElement = document.getElementById('mystery-word');
// for (let i=0; i<sampleWord.length; i++) {
//     let newElement = document.createElement("div");
//     let text = document.createTextNode('_');
//     newElement.appendChild(text);
//     newElement.classList.add(sampleWord[i]);
//     mysteryElement.appendChild(newElement);
// }

for (let letter of sampleWordCap) {
    let blankDiv = document.createElement('div');
    let blank = document.createTextNode('_');
    blankDiv.appendChild(blank);
    blankDiv.classList.add(`${letter}`);
    mysteryElement.appendChild(blankDiv);
}

let buttons = document.querySelectorAll('.button')

// function buttonPress(button) {
//     if (sampleWord.includes(button.innerText) === true) {
//         let matchDivs = document.querySelectorAll('.' + button.innerText);
//         for (let div of matchDivs) {
//             div.innerText = button.innerText;
//         }
//     }
    // } else {
    //     let wrongGuess = document.createElement('div');
    //     wrongGuess.innerText = button.innerText;
    //     // let wrongLetter = document.createTextNode(button.innerText);
    //     // wrongGuess.appendChild(wrongLetter);
    //     graveyard.appendChild(wrongGuess);
    // }
    // button.removeEventListener('click', buttonPress);
// }

// for (let button of buttons) {
//     button.addEventListener('click', buttonPress)
// }



for (let button of buttons) {
    button.addEventListener('click', () => {
        if (sampleWord.includes(button.innerText) === true) {
            let matchDivs = document.querySelectorAll('.'+button.innerText);
            for (let div of matchDivs) {
                div.innerText = button.innerText
            }
        }
    })
}