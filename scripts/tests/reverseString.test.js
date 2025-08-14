import reverseString from '../reverseString.js';

test('Non-string input should result in an error', () => {
    expect(() => { reverseString(5); }).toThrow();
});

