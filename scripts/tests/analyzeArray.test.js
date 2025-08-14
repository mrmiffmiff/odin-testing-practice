import analyzeArray from '../analyzeArray.js';

test('Non-array input should throw', () => {
    expect(() => { analyzeArray(5); }).toThrow();
});

test('Array with non-numbers should throw', () => {
    expect(() => { analyzeArray([3, 5, 'hi', 1, 7]); }).toThrow();
});

test('Properly formatted array should return properly formatted object', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});