function upsort (seq) {
    let ref = null;
    for (let i=1; i<seq.length; i++) {
        ref = seq[i];
        let ptr = i-1;
        while(ptr >= 0 && seq[ptr] > ref) {
            seq[ptr+1] = seq[ptr];
            ptr--;
        }
        seq[ptr+1] = ref;
    };
}

function downsort (seq) {
    let ref = null;
    for (let i=seq.length-2; i>=0; i--) {
        ref = seq[i];
        let ptr = i+1;
        while(ptr < seq.length && seq[ptr] > ref) {
            seq[ptr-1] = seq[ptr];
            ptr++;
        }
        seq[ptr-1] = ref;
    };
}

function isort (origin, order=true) {
    seq = origin.concat();
    if (order) {
        upsort(seq);
    } else {
        downsort(seq);
    }
    return seq;
}

/* 示例 */
console.log(isort([4, 9, 5, 7, 2, 3], false));

module.exports = isort;