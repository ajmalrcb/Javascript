function plusMinus(arr) {
    const size = arr.length;
    const numMap = { 'zero': 0, 'pos': 0, 'neg': 0 };
    arr.forEach((item) => {
        item = parseInt(item);
        if (item === 0) {
            numMap['zero'] = numMap['zero'] + 1;
        } else if (item < 0) {
            numMap['neg'] = numMap['neg'] + 1;
        } else if (item > 0) {
            numMap['pos'] = numMap['pos'] + 1;
        }
    });
    ['pos', 'neg', 'zero'].forEach((key) => console.log(`${(numMap[key] / size).toFixed(6)}`));
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));