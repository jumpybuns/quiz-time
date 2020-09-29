import { countsAsYes } from '../isAYes.js';

const test = QUnit.test;

test('countsAsYes should take in a word that starts with Y and return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yes = 'yaaa';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes(yes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('countsAsYes any other response should return false', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const no = 'NOPE';
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes(no);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});