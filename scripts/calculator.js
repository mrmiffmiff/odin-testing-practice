const calculator = {
    add: (a, b) => {
        if (typeof a !== "number" || typeof b !== "number") return NaN;
        return a + b;
    },
    subtract: (a, b) => {
        if (typeof a !== "number" || typeof b !== "number") return NaN;
        return a - b;
    },
    multiply: 'placeholder',
    divide: ' placeholder'
};

export default calculator;