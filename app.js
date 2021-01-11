// import functions and grab DOM elements
const quizButton = document.getElementById('quiz-button');
const resultsDiv = document.getElementById('secret-div');

// initialize state


// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    
    const userName = prompt('What is your first name?');
    
    const userAgree = confirm(`${userName}, are you sure you would like to take this quiz?`);

    if(!userAgree) return;

});