export default function capitalize(inputString) {
    if (typeof inputString !== 'string') throw new Error();
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}