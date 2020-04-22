/*!
 * Quik Sort
 * https://github.com/Morilence/Algorithms-js
 */

function sort(seq, head, rear, cmp) {
    if (head >= rear) return;
    let ref = seq[head],
        left = head,
        right = rear,
        middle = null;
    while (left < right) {
        while (left < right && !cmp(seq[right], ref)) {
            right--;
        }
        seq[left] = seq[right];
        while (left < right && !cmp(ref, seq[left])) {
            left++;
        }
        seq[right] = seq[left];
    }
    middle = left;
    seq[middle] = ref;
    sort(seq, head, middle - 1, cmp);
    sort(seq, middle + 1, rear, cmp);
}

/**
 * @api public
 * @param {Array} origin origin sequence
 * @param {Function} compare custom comparison function
 * @return {Array} sorted sequence
 * @warning "=",">=","<=" are not allowed in comparison function
 * @author Morilence
 */

function qsort(
    origin,
    compare = function (front, back) {
        return front < back;
    }
) {
    let seq = origin.concat(),
        cmp = function (a, b) {
            return Boolean(compare(a, b));
        };
    sort(seq, 0, seq.length - 1, cmp);
    return seq;
}

/* demo */
console.log("demo1: ", qsort([42, 19, 58, 37, 102, 3]));
console.log(
    "demo2: ",
    qsort([{ val: 34 }, { val: 15 }, { val: 81 }, { val: 7 }], (a, b) => {
        return a.val > b.val;
    })
);

module.exports = qsort;
