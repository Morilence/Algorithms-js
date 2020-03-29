function stein (a, b) {
    if (a == 0) {return b;}
    if (b == 0) {return a;}
    let offset = 0;
    while (((a&1) == 0)&&((b&1) == 0)) {
        a = a>>1;
        b = b>>1;
        offset++;
    }
    while ((a&1) == 0) {a = a>>1;};
    while ((b&1) == 0) {b = b>>1;};
    if (a < b) {a = a^b; b = a^b; a = a^b;};
    a = (a-b)>>1;
    return stein(a, b)<<offset;
}

/* 示例 */
console.log(stein(132, 48));

module.exports = stein;