import calculator from '../calculator.js';

test('Calculator object contains Add, Subtract, Multiply, and Divide properties (which are functions but that\'s not important', () => {
    expect(calculator).toHaveProperty('add');
    expect(calculator).toHaveProperty('subtract');
    expect(calculator).toHaveProperty('multiply');
    expect(calculator).toHaveProperty('divide');
});

