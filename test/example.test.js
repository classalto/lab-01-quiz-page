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
test('should return false when given an input of naaaah', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes('naaaah');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
