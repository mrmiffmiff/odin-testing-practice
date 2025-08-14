import capitalize from '../capitalize.js';

test('Non-string input should result in an error', () => {
    expect(() => { capitalize(5); }).toThrow();
});

test('Empty string input should output an empty string', () => {
    expect(capitalize('')).toMatch('');
});

test('Single character lowercase string should output that same character uppercase', () => {
    expect(capitalize('a')).toMatch('A');
});

test('Single character uppercase string should output that same character', () => {
    expect(capitalize('B')).toMatch('B');
});

test('Multicharacter character string with lowercase first character should output that same string with the first character uppercase', () => {
    expect(capitalize('cDefG')).toMatch('CDefG');
});

test('Multicharacter string with uppercase first character should output that same string', () => {
    expect(capitalize('HiJkl')).toMatch('HiJkl');
});

