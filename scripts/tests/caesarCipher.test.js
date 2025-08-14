import caesarCipher from '../caesarCipher.js';

test('Graceful error if first parm isn\'t a string', () => {
    expect(caesarCipher(9, 3)).toMatch('Text must be string');
});

test('Graceful error if second parm isn\'t a number', () => {
    expect(caesarCipher('test', 'test2')).toMatch('Shift must be number');
});

test('Empty string should return empty string', () => {
    expect(caesarCipher('', 6)).toMatch('');
})

test('Lowercase forward shift', () => {
    expect(caesarCipher('g', 3)).toMatch('j');
});

test('Lowercase backward shift', () => {
    expect(caesarCipher('g', -3)).toMatch('d');
});

test('Uppercase forward shift', () => {
    expect(caesarCipher('G', 3)).toMatch('J');
});

test('Uppercase backward shift', () => {
    expect(caesarCipher('G', -3)).toMatch('D');
});

test('Mixed case shift', () => {
    expect(caesarCipher('GhIjKl', 5)).toMatch('LmNoPq');
});

test('Forward wrapping', () => {
    expect(caesarCipher('xyz', 3)).toMatch('abc');
});

test('Backward wrapping', () => {
    expect(caesarCipher('abc', -3)).toMatch('xyz');
});

test('Non-alphabetical characters preserved', () => {
    expect(caesarCipher('Hello, World! 321', 3)).toMatch('Khoor, Zruog! 321');
});

test('Larger than alphabet forward shift', () => {
    expect(caesarCipher('abc', 27)).toMatch('bcd');
});

test('Larger than alphabet backward shift', () => {
    expect(caesarCipher('bcd', -27)).toMatch('abc');
});