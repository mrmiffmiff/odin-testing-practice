import calculator from '../calculator.js';

test('Calculator object contains Add, Subtract, Multiply, and Divide properties (which are functions but that\'s not important', () => {
    expect(calculator).toHaveProperty('add');
    expect(calculator).toHaveProperty('subtract');
    expect(calculator).toHaveProperty('multiply');
    expect(calculator).toHaveProperty('divide');
});

test('Attempting to add at least one non-number returns a graceful "error"', () => {
    expect(calculator.add('hello', 3)).toBe(NaN);
});

test('Adding two numbers returns their sum', () => {
    expect(calculator.add(5, 7)).toBe(12);
});

test('Attempting to subtract at least one non-number returns a graceful "error"', () => {
    expect(calculator.subtract('hello', 3)).toBe(NaN);
});

test('Subtracting two numbers returns their difference', () => {
    expect(calculator.subtract(12, 7)).toBe(5);
});

test('Attempting to multiply at least one non-number returns a graceful "error"', () => {
    expect(calculator.multiply('hello', 3)).toBe(NaN);
});

test('Multiplying two numbers returns their product', () => {
    expect(calculator.multiply(5, 3)).toBe(15);
});