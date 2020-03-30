function upsort (seq, head, rear) {
    if (head >= rear) return;
    let ref = seq[head],
    left = head,
    right = rear,
    middle = null;
    while (left < right) {
        while (left < right && ref <= seq[right]) {
            right--;
        }
        seq[left] = seq[right];
        while (left < right && ref >= seq[left]) {
            left++;
        }
        seq[right] = seq[left];
    };
    middle = left;
    seq[middle] = ref;
    upsort(seq, head, middle-1);
    upsort(seq, middle+1, rear);
}

function downsort (seq, head, rear) {
    if (head >= rear) return;
    let ref = seq[head],
    left = head,
    right = rear,
    middle = null;
    while (left < right) {
        while (left < right && ref >= seq[right]) {
            right--;
        }
        seq[left] = seq[right];
        while (left < right && ref <= seq[left]) {
            left++;
        }
        seq[right] = seq[left];
    };
    middle = left;
    seq[middle] = ref;
    downsort(seq, head, middle-1);
    downsort(seq, middle+1, rear);
}

function qsort (origin, order=true) {
    let seq = origin.concat();
    if (order) {
        upsort(seq, 0, seq.length-1);
    } else {
        downsort(seq, 0, seq.length-1);
    }
    return seq;
}

/* demo */
console.log(qsort([42, 19, 58, 37, 102, 3]));

module.exports = qsort;