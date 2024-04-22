const wordEl= document.getElementById('word')
const wrongLettersEl = document.getElementById('wrong-letters')
const playAgainBtn = document.getElementById('play-again')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementByOd('final-message')
const figureParts = document.querySelectorAll('figure-part')

const word = ['application', 'programming', 'interface', 'wizard']

let selectedIndex = Math.floor(word.length * Math.random())
let selectedWord = word[selectedIndex]

const correctLetters = []
const wrongLetters = []

//show hidden word (doesnt work??)
function displayWord() {
    wordEl.innerHTML = `
    ${selectedWord
        .split('')
        .map(letter => `
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
        </span>
        ` ).join('')
    }
   `
   const innerWord = wordEl.innerText..replace(/\n/g, '')

   if (innerWord == selectedWord) {
    finalMessage 'congratulations! You won!'
    popup.style.display = 'flex'
   }
}

displayWord()
