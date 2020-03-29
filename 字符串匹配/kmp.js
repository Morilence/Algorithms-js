function kmp (text, pattern, overlap=false) {
    let fail = [];
    let endPosOfMaxPrefix = -1;
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

    let locs = [];
    let endPosOfMatched = -1;
    for (let i = 0; i < text.length; i++) {
        while (endPosOfMatched > -1 && pattern[endPosOfMatched+1] != text[i]) {
            endPosOfMatched = fail[endPosOfMatched];
        }
        if (pattern[endPosOfMatched+1] == text[i]) {
            endPosOfMatched++;
        }
        if (endPosOfMatched == pattern.length - 1) {
            locs.push(i-pattern.length+1);
            /* 是否允许重叠地匹配子串 */
            if (overlap) {
                endPosOfMatched = fail[endPosOfMatched];
            } else {
                endPosOfMatched = 0;
            }
        }
    }
    return locs;
}

/* 示例 */
console.log(kmp("ashgcasavasdf", "as"));

module.exports = kmp;