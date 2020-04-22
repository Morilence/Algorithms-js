/*!
 * Euclid
 * https://github.com/Morilence/Algorithms-js
 */

/**
 * @api public
 * @param {Number} a
 * @param {Number} b
 * @return {Number} GCD
 * @author Morilence
 */

function euclid(a, b) {
    return b == 0 ? a : euclid(b, a % b);
}

/* demo */
console.log(euclid(69, 18));

module.exports = euclid;
