/*!
 * Berlekamp-Massey
 * https://github.com/Morilence/Algorithms-js
 */

function add(LRF1, LRF2) {
    let sum = [],
        longer = null,
        shorter = null;
    if (LRF1.length > LRF2.length) {
        longer = LRF1;
        shorter = LRF2;
    } else {
        longer = LRF2;
        shorter = LRF1;
    }
    for (let i = 0; i < shorter.length; i++) {
        sum.push(shorter[i] + longer[i]);
    }
    for (let i = shorter.length; i < longer.length; i++) {
        sum.push(longer[i]);
    }
    return sum;
}

function times(LRF, k) {
    let res = [];
    LRF.forEach(elem => {
        res.push(elem * k);
    });
    return res;
}

/* default: i > LRF.length */
function figure(sequence, i, LRF) {
    let res = 0;
    for (let j = 0; j < LRF.length; j++) {
        res += sequence[i - 1 - j] * LRF[j];
    }
    return res;
}

/**
 * @api public
 * @param {Array} sequence
 * @return {Array} the shortest linear recursion formula (LRF)
 * @warning graph including negative weight loop is not allowed
 * @author Morilence
 */

function bm(sequence) {
    let fail = [],
        curLRF = [],
        lastLRF = [],
        deltaList = [];
    for (let i = 0; i < sequence.length; i++) {
        deltaList[i] = sequence[i] - figure(sequence, i, curLRF);
        if (deltaList[i] != 0) {
            fail.push(i);
            let newLRF = null;
            if (fail.length == 1) {
                newLRF = [];
                for (let j = 0; j < i + 1; j++) {
                    newLRF.push(0);
                }
            } else {
                let aidedLRF = [],
                    mul = deltaList[i] / deltaList[fail[fail.length - 2]];
                for (let j = 0; j < i - fail[fail.length - 2] - 1; j++) {
                    aidedLRF.push(0);
                }
                aidedLRF.push(mul);
                aidedLRF = aidedLRF.concat(times(lastLRF, -1 * mul));
                newLRF = add(curLRF, aidedLRF);
            }
            lastLRF = curLRF;
            curLRF = newLRF;
        }
    }
    return curLRF;
}

/* demo */
console.log(bm([1, 2, 4, 9, 20, 40, 90]));

module.exports = bm;
