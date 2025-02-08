function flippingBits(n) {
    return ((2 ** 32) - 1) - n;
}

console.log(flippingBits(2147483647))