/*!
 * Boyer-Moore
 * https://github.com/Morilence/Algorithms-js
 */

function preBC (pattern) {
    let bc = {}, // use hash to deal with surrogate
    plen = pattern.length;
    bc[pattern[plen-1]] = plen;
    for (let i=0; i<plen-1; i++) {
        bc[pattern[i]] = plen - 1 - i;
    };
    return bc;
}

function preSuff (pattern) {
    let suff = [],
    plen = pattern.length,
    startOfLastMatch = plen -1,
    endOfLastMatch = plen - 1;
    suff[plen-1] = plen;
    for (let i=plen-2; i>=0; i--) {
        if (i > endOfLastMatch) {
            if (suff[(plen-1)-(startOfLastMatch-i)] < (i-endOfLastMatch)) {
                suff[i] = suff[(plen-1)-(startOfLastMatch-i)];
            }
        } else {
            let ptr = i;
            while(ptr >=0 && pattern[ptr] == pattern[ptr+((plen-1)-i)]) {
                ptr --;
            };
            suff[i] = i - ptr;
            startOfLastMatch = i;
            endOfLastMatch = ptr;
        }
    };
    return suff;
}

function preGS (pattern) {
    let gs = [],
    suff = preSuff(pattern),
    plen = pattern.length;
    for (let i=0; i<plen; i++) {
        gs[i] = plen;
    };
    for (let i=plen-1; i>=0; i--) {
        if (suff[i] == i+1) {
            for (let j=0; j<(plen-1)-i; j++) {
                if (gs[j] == plen) {
                    gs[j] == (plen - 1) - i;
                }
            };
        }
    };
    for (let i=0; i<plen-1; i++) {
        gs[(plen-1)-suff[i]] = (plen - 1) - i;
    };
    return gs;
}

/**
 * @api public
 * @param {String} text
 * @param {String} pattern
 * @return {Array} matched positions
 * @warning matching without overlap is not supported
 * @author Morilence
 */

function bm (text, pattern) {
    let locs = [],
    offset = 0,
    tlen = text.length,
    plen = pattern.length,
    bc = preBC(pattern),
    gs = preGS(pattern);
    while (offset <= tlen - plen) {
        let ptr = plen - 1;
        for (; ptr>=0 && pattern[ptr] == text[offset+ptr]; ptr--);
        if (ptr < 0) {
            locs.push(offset);
            offset += gs[0];
        } else {
            // whether the character exists in pattern
            if (!bc.hasOwnProperty(text[offset+ptr])) {
                offset += ptr + 1;
            } else {
                offset += Math.max(bc[text[offset+ptr]] - (plen-1-ptr), gs[ptr]);
            }
        }
    };
    return locs;
}

/* demo */
console.log(bm("念天地之悠悠，独怆然而涕下", "悠"));

module.exports = bm;