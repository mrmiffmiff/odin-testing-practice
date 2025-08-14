export default function reverseString(inputString) {
    if (typeof inputString !== 'string') throw new Error();
    return inputString.split('').reverse().join('');
}