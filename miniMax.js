function miniMaxSum(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const sumWithoutFirst = sortedArr.reduce((prev, curr, index) => {
        if (index !== 0 && curr) {
            return prev + curr;
        } else {
            return 0
        }
    }, 0
    )
    const sumWithoutLast = sortedArr.reduce((accumulator, currentValue, currentIndex, sortedArr) => {
        if (currentIndex < sortedArr.length - 1) {
            return accumulator + currentValue;
        } else {
            return accumulator;
        }
    }, 0);

    console.log(sumWithoutLast, sumWithoutFirst);
}

miniMaxSum([1, 2, 3, 4, 5]);