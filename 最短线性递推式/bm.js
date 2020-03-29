const Vector = require('../libs/Vector');

/* 推算第i项，默认有: i>recurSeq.length */
function figure (numSeq, i, recurSeq) {
    let res = 0;
    for (let j=0; j<recurSeq.length; j++) {
        res += numSeq[i-1-j]*recurSeq[j];
    }
    return res;
}

function bm (numSeq) {
    let fail = [],
    curRecurSeq = [],
    lastRecurSeq = [],
    deltaList = [];
    for (let i=0; i<numSeq.length; i++) {
        deltaList[i] = numSeq[i] - figure(numSeq, i, curRecurSeq);
        if (deltaList[i] != 0) {
            fail.push(i);
            let newRecurSeq = null;
            if (fail.length == 1) {
                newRecurSeq = [];
                for (let j=0; j<i+1; j++) {
                    newRecurSeq.push(0);
                };
            } else {
                let mul = deltaList[i]/deltaList[fail[fail.length-2]];
                let aidedSeq = [];
                for (let j=0; j<i-fail[fail.length-2]-1; j++) {
                    aidedSeq.push(0);
                };
                aidedSeq.push(mul);
                aidedSeq = aidedSeq.concat(Vector.scalarMul(lastRecurSeq, -1*mul));
                newRecurSeq = Vector.add(curRecurSeq, aidedSeq);
            }
            lastRecurSeq = curRecurSeq;
            curRecurSeq = newRecurSeq;
        }
    }
    return curRecurSeq;
}

/* 示例 */
console.log(bm([1, 2, 4, 9, 20, 40, 90]));

module.exports = bm;