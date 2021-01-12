// IMPORT MODULES under test here:
import { countsAsAYes } from '../utils.js';

const test = QUnit.test;

test('should return false when given hell yes as an input', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes('hell yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
