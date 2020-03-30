function euclid (a, b) {
    return b == 0 ? a : euclid(b, a%b);
}

/* demo */
console.log(euclid(69, 18));

module.exports = euclid;