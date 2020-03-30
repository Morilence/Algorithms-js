/*!
 * Insertion Sort
 * https://github.com/Morilence/Algorithms-js
 */

function sort (seq, cmp) {
    let ref = null;
    for (let i=1; i<seq.length; i++) {
        ref = seq[i];
        let ptr = i-1;
        while(ptr >= 0 && cmp(ref, seq[ptr])) {
            seq[ptr+1] = seq[ptr];
            ptr--;
        }
        seq[ptr+1] = ref;
    };
}

/**
 * @api public
 * @param {Array} origin origin sequence
 * @param {Function} compare custom comparison function
 * @return {Array} sorted sequence
 * @warning "=",">=","<=" are not allowed in comparison function
 * @author Morilence
 */

function isort (origin, compare=function(front, back){return front<back}) {
    seq = origin.concat(),
    cmp = function (a, b) {return Boolean(compare(a, b))};
    sort(seq, cmp);
    return seq;
}

/* demo */
console.log("demo1: ", isort([4, 9, 5, 7, 2, 3]));
console.log("demo2: ", isort([{val: 11}, {val: 1}, {val: 23}, {val: 99}], (a, b) => {return a.val>b.val}));

module.exports = isort;