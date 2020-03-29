function upsort (seq) {
    let tmp = null;
    for (let i=seq.length-1; i>=0; i--) {
        for (let j=0; j<i; j++) {
            if (seq[j] > seq[j+1]) {
                tmp = seq[j];
                seq[j] = seq[j+1];
                seq[j+1] = tmp;
            }
        };
    };
}

function downsort(seq) {
    let tmp = null;
    for (let i=seq.length-1; i>=0; i--) {
        for (let j=0; j<i; j++) {
            if (seq[j] < seq[j+1]) {
                tmp = seq[j];
                seq[j] = seq[j+1];
                seq[j+1] = tmp;
            }
        };
    };
}

function bsort (origin, order=true) {
    seq = origin.concat();
    if (order) {
        upsort(seq);
    } else {
        downsort(seq);
    };
    return seq;
}

/* 示例 */
console.log(bsort([13, 12, 5, 7, 101, 1]));

module.exports = bsort;