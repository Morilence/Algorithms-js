function upmerge (left, right) {
    let comb = [];
    while (left.length>0 && right.length>0) {
        if (left[0] < right[0]) {
            comb.push(left.shift());
        } else {
            comb.push(right.shift());
        }
    };
    return comb.concat(left).concat(right);
}
function upsort (seq) {
    if (seq.length == 1) return seq;
    let middle = Math.floor(seq.length/2);
    return upmerge(upsort(seq.slice(0, middle)), upsort(seq.slice(middle)));
}

function downmerge (left, right) {
    let comb = [];
    while (left.length>0 && right.length>0) {
        if (left[0] > right[0]) {
            comb.push(left.shift());
        } else {
            comb.push(right.shift());
        }
    };
    return comb.concat(left).concat(right);
}
function downsort (seq) {
    if (seq.length == 1) return seq;
    let middle = Math.floor(seq.length/2);
    return downmerge(downsort(seq.slice(0, middle)), downsort(seq.slice(middle)));
}

function msort (origin, order=true) {
    let seq = origin.concat();
    if (order) {
        seq = upsort(seq);
    } else {
        seq = downsort(seq);
    }
    return seq;
}

/* demo */
console.log(msort([41, 11, 8, 27, 2, 9, 87, 33]));

module.exports = msort;