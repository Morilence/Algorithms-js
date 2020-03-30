/*!
 * Stein
 * https://github.com/Morilence/Algorithms-js
 */

/**
 * @api public
 * @param {Number} a
 * @param {Number} b
 * @return {Number} GCD
 * @author Morilence
 */

function stein (a, b) {
    if (a == 0) {return b;}
    if (b == 0) {return a;}
    let offset = 0;
    while (((a&1) == 0)&&((b&1) == 0)) {
        a = a>>1;
        b = b>>1;
        offset++;
    }
    while ((a&1) == 0) {a = a>>1;};
    while ((b&1) == 0) {b = b>>1;};
    if (a < b) {a = a^b; b = a^b; a = a^b;};
    a = (a-b)>>1; // pretreat before the recurrence
    return stein(a, b)<<offset;
}

/* demo */
console.log(stein(132, 48));

module.exports = stein;