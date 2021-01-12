// import functions and grab DOM elements
import { countsAsAYes } from './utils.js';

const quizButton = document.getElementById('quiz-button');
const resultsDiv = document.getElementById('secret-div');

// initialize state
let answersCorrect = 0;

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    
    const userName = prompt('What is your first name?');
    if (!userName) return;
    
    const userAgree = confirm(`${userName}, are you sure you would like to take this quiz?`);

    if (!userAgree) return;

    // User prompt validation
    const userAnswer1 = prompt(`${userName}, did Liam O'brien appear as a voice actor in the cartoon Star Wars Rebels? (yes or no)`);
    if (countsAsAYes(userAnswer1)) answersCorrect++;
    
    const userAnswer2 = prompt(`${userName}, was one of Liam O'Brien's major anime roles as Gaara in Naruto? (yes or no)`);
    if (countsAsAYes(userAnswer2)) answersCorrect++;
    
    const userAnswer3 = prompt(`${userName} did Liam O'brien appear as a voice actor in the cartoon Star Wars Rebels? (yes or no)`);
    if (countsAsAYes(userAnswer3)) answersCorrect++;
    
    
    alert(`${userName}, your quiz is completed and your results will be displayed shortly!`);

    const floatCorrect = (answersCorrect / 3) * 100;
    const percentCorrect = Math.ceil(floatCorrect);

    // results styling control flow
    if (answersCorrect == 3) {
        resultsDiv.classList.add('three');
    } else if (answersCorrect == 2) {
        resultsDiv.classList.add('two');
    } else if (answersCorrect == 1) {
        resultsDiv.classList.add('one');
    } else {
        resultsDiv.classList.add('zero');
    }

    resultsDiv.textContent = `${userName}, your score was ${percentCorrect}%!`;

});