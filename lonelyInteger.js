function lonelyinteger(a) {
    const numObj = {}
    if (a.length === 1) {
        return a[0];
    } else {
        a.forEach((num) => {
            if (!numObj[String(num)]) {
                numObj[String(num)] = 1;
            } else {
                numObj[String(num)] += 1;
            }
        })
    }
    let result;
    Object.values(numObj).forEach((value, index) => {
        if (value === 1) {
            result = Object.keys(numObj)[index]
        }
    });
    return result;
}
console.log(lonelyinteger([0, 0, 1, 2, 1]));