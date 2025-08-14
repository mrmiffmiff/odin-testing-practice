const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// JS modulo is remainder, not true mathematical modulo; this is a workaround
function trueModulo(n, m) {
    return ((n % m) + m) % m;
}

export default function caesarCipher(string, shift) {
    if (typeof string !== 'string') return 'Text must be string';
    if (string === '') return '';
    if (typeof shift !== 'number') return 'Shift must be number';
    shift = Math.floor(shift);
    let shiftedArray = [];
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if (!(/[a-zA-Z]/.test(char))) { // if not alphabetic, immediately add to new string
            shiftedArray.push(char);
            continue;
        }
        const isUppercase = /[A-Z]/.test(char);
        char = char.toLowerCase();
        const currentIndex = alphabet.indexOf(char);
        const newIndex = trueModulo(currentIndex + shift, 26); // the modulo should cover going over the boundaries in either direction
        let newChar = alphabet[newIndex];
        if (isUppercase) newChar = newChar.toUpperCase();
        shiftedArray.push(newChar);
    }
    return shiftedArray.join('');
}