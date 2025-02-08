function matchingStrings(strings, queries) {
    const countArray = queries.map((query) => {
        let count = 0;
        strings.forEach((string) => {
            if (string === query) {
                count = count + 1;
            }
        }
        )
        return count;
    });
    return countArray;
}

console.log(matchingStrings(strings, queries))