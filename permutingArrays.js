function twoArrays(k, A, B) {
    const ascendingA = A.sort((a, b) => a - b);
    const descendingB = B.sort((a, b) => b - a);
    const result = ascendingA.every((item, index) => {
        return item + descendingB[index] >= k;
    })
    return result ? "YES" : "NO";
}

console.log(twoArrays(2, [3, 10], [2, 1, 3]));