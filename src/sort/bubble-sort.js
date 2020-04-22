/*!
 * Bubble Sort
 * https://github.com/Morilence/Algorithms-js
 */

function sort(seq, cmp) {
    let tmp = null;
    for (let i = seq.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (!cmp(seq[j], seq[j + 1])) {
                tmp = seq[j];
                seq[j] = seq[j + 1];
                seq[j + 1] = tmp;
            }
        }
    }
}

/**
 * @api public
 * @param {Array} origin origin sequence
 * @param {Function} compare custom comparison function
 * @return {Array} sorted sequence
 * @warning "=",">=","<=" are not allowed in comparison function
 * @author Morilence
 */

function bsort(
    origin,
    compare = function (front, back) {
        return front < back;
    }
) {
    let seq = origin.concat(),
        cmp = function (a, b) {
            return Boolean(compare(a, b));
        };
    sort(seq, cmp);
    return seq;
}

/* demo */
console.log("demo1: ", bsort([13, 12, 5, 7, 101, 1]));
console.log(
    "demo2: ",
    bsort([{ val: 3 }, { val: 1 }, { val: 8 }, { val: 5 }], (a, b) => {
        return a.val > b.val;
    })
);

module.exports = bsort;
