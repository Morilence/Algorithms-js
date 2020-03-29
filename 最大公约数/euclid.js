function euclid (a, b) {
    return b == 0 ? a : euclid(b, a%b);
}

/* 示例 */
console.log(euclid(69, 18));

module.exports = euclid;