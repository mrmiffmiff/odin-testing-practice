import capitalize from '../capitalize.js';

test('Non-string input should result in an error', () => {
    expect(() => { capitalize(5); }).toThrow();
});

test('Empty string input should output an empty string', () => {
    expect(capitalize('')).toMatch('');
});