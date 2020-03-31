/*!
 * Knuth-Morris-Pratt
 * https://github.com/Morilence/Algorithms-js
 */

/**
 * @api public
 * @param {String} text
 * @param {String} pattern
 * @param {Boolean} overlap whether matching substrings are allowed to overlap
 * @return {Array} matched positions
 * @author Morilence
 */

function kmp (text, pattern, overlap=false) {
    let fail = [],
    endPosOfMaxPrefix = -1; // end position of max-prefix in pattern
    fail[0] = endPosOfMaxPrefix;
    for (let i = 1; i < pattern.length; i++) {
        while (endPosOfMaxPrefix > -1 && pattern[endPosOfMaxPrefix+1] != pattern[i]) {
            endPosOfMaxPrefix = fail[endPosOfMaxPrefix];
        }
        if (pattern[endPosOfMaxPrefix+1] == pattern[i]) {
            endPosOfMaxPrefix++;
        }
        fail[i] = endPosOfMaxPrefix;
    }
    let locs = [],
    endPosOfMatched = -1;
    for (let i = 0; i < text.length; i++) {
        while (endPosOfMatched > -1 && pattern[endPosOfMatched+1] != text[i]) {
            endPosOfMatched = fail[endPosOfMatched];
        }
        if (pattern[endPosOfMatched+1] == text[i]) {
            endPosOfMatched++;
        }
        if (endPosOfMatched == pattern.length - 1) {
            locs.push(i-pattern.length+1);
            if (overlap) {
                endPosOfMatched = fail[endPosOfMatched];
            } else {
                endPosOfMatched = 0;
            }
        }
    }
    return locs;
}

/* demo */
console.log(kmp("ashgcasavasdf", "as"));

module.exports = kmp;