function floyd (matrix) {
    let fmatrix = [];
    for (let i=0; i < matrix.length; i++) {
        fmatrix[i] = [];
        for (let j=0; j < matrix.length; j++) {
            fmatrix[i][j] = {
                len: matrix[i][j],
                path: [i]
            };
        }
    }
    for (let k=0; k < fmatrix.length; k++) {
        for (let i=0; i < fmatrix.length; i++) {
            for (let j=0; j < fmatrix.length; j++) {
                if (fmatrix[i][j].len > fmatrix[i][k].len + fmatrix[k][j].len) {
                    fmatrix[i][j].len = fmatrix[i][k].len + fmatrix[k][j].len;
                    fmatrix[i][j].path.push(k);
                }
                if (k == fmatrix.length - 1) {
                    fmatrix[i][j].path.push(j);
                }
            }
        }
    }
    return fmatrix;
}

/* demo */
let m = [
    [0, 2, 6, 4],
    [Infinity, 0, 3, Infinity],
    [7, Infinity, 0, 1],
    [5, Infinity, 12, 0]
];
let fm = floyd(m);
for(let i=0; i<fm.length; i++) {
    let curRow = "";
    for (let j=0; j<fm.length; j++) {
        curRow += (j==0?"":",") + fm[i][j].len;
    };
    console.log(curRow);
}

module.exports = floyd;