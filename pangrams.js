function pangrams(s) {
    return [...'abcdefghijklmnopqrstuvwxyz'].every((letter) =>
        s.toLowerCase().includes(letter)) ? 'pangram' : 'not pangram';
}

console.log(pangrams('We promptly judged antique ivory buckles for the next prize'));