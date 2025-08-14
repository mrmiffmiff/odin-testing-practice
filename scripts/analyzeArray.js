export default function analyzeArray(array) {
    if (!Array.isArray(array)) throw new Error();
    let sum = 0;
    for (let member of array) {
        if (typeof member != 'number') throw new Error();
        sum += member;
    }
    return {
        average: sum / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}