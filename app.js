import { countsAsYes } from './isAYes.js' ;


const button = document.getElementById('button');
const results = document.getElementById('answers');


// WHAT: We need these HTML elements:

// We need some copy/content for the user to (no id)
// Button (needs an id)
// Why? Initiate the prompts
// Span/Div/Section (needs an id) to inject the results text into to show the user their score
// WHEN: Add an event listener to the click of the button
button.addEventListener('click', () => {

    const userName = prompt('What do you call yourself?');

    const userConfirmation = confirm(`${userName}, Are you ready for the quiz?`);
    
    if (!userConfirmation) {
        alert(`${userName}, you coward.`);
        return;
    }

    let correctAnswers = 0;
    
    const question1Response = prompt(`Alright ${userName}, Is the water on Mars drinkable?`) ;
        
    if (countsAsYes(question1Response)) {
        correctAnswers++;
    }

    const question2Response = prompt(`Nice ${userName}, Is it possible there is extraterrestial life in the underground lakes?`);

    if (countsAsYes(question2Response)) {
        correctAnswers++;

    }
    const question3Response = prompt(`Okay ${userName}, Is there currently definitve evidence of life on Mars?`);

    if (!countsAsYes(question3Response)) {
        correctAnswers++;

    }



    alert(`Good job! Lets see the results`);

    if (correctAnswers === 3) {
        results.textContent = `${userName}, you got ${correctAnswers} right out of 3. A+! 100%!`;
    }
    

    if (correctAnswers === 2) {
        results.textContent = `${userName}, you got ${correctAnswers} right out of 3 Pretty Decent!`;
    
    }
    
    if (correctAnswers === 1) {
        results.textContent = `${userName}, you got ${correctAnswers} right out of 3. Very mediocre!`;
        
    }

    if (correctAnswers === 0) {
        results.textContent = `${userName}, you got ${correctAnswers} right out of 3. Not good friend.`;
        
    }    
  
    
});



