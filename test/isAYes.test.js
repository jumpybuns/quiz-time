// IMPORT MODULES under test here:
import { countsAsYes } from '../isAYes.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    const input = `yessss`;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = countsAsYes(input);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, expected);
});


test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const input = `nah`;

    const expected = false;


    //Act 
    // Call the function you're testing and set the result to a const
    const result = countsAsYes(input);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, expected);
});
