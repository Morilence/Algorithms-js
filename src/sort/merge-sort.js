/*!
 * Merge Sort
 * https://github.com/Morilence/Algorithms-js
 */

function merge (left, right, cmp) {
    let comb = [];
    while (left.length>0 && right.length>0) {
        if (cmp(left[0], right[0])) {
            comb.push(left.shift());
        } else {
            comb.push(right.shift());
        }
    };
    return comb.concat(left).concat(right);
}

function sort (seq, cmp) {
    if (seq.length == 1) return seq;
    let middle = Math.floor(seq.length/2);
    return merge(sort(seq.slice(0, middle), cmp), sort(seq.slice(middle), cmp), cmp);
}

/**
 * @api public
 * @param {Array} origin origin sequence
 * @param {Function} compare custom comparison function
 * @return {Array} sorted sequence
 * @warning "=",">=","<=" are not allowed in comparison function
 * @author Morilence
 */

function msort (origin, compare=function(front, back){return front<back}) {
    let seq = origin.concat(),
    cmp = function (a, b) {return Boolean(compare(a, b))};
    seq = sort(seq, cmp);
    return seq;
}

/* demo */
console.log("demo1: ", msort([41, 11, 8, 27, 9, 87, 33]));
console.log("demo2: ", msort([{val: 9}, {val: 1}, {val: 13}], (a, b) => {return a.val>b.val}));

module.exports = msort;