// prompt check function

export function countsAsAYes(userInput) {
    
    if (userInput[0].toUpperCase() === 'Y'){
        return true;
    } 
    if (userInput[0].toUpperCase() !== 'Y'){
        return false;
    }
}