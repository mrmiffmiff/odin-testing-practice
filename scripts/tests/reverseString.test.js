import reverseString from '../reverseString.js';

test('Non-string input should result in an error', () => {
    expect(() => { reverseString(5); }).toThrow();
});

test('Empty string input should output an empty string', () => {
    expect(reverseString('')).toMatch('');
});

test('Single character string input should output same string', () => {
    expect(reverseString('a')).toMatch('a');
});

test('Multi-character string input should output that string reversed', () => {
    expect(reverseString('bCdEF')).toMatch('FEdCb');
})