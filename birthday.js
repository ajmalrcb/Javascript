function birthday(s, d, m) {
    let combinations = 0;
    for (let i = 0; i < s.length - m + 1; i++) {
        if (s.slice(i, i + m).reduce((a, b) => a + b, 0) == d) combinations++;
    }
    return combinations;

}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));