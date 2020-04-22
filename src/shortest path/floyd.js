/*!
 * Floyd
 * https://github.com/Morilence/Algorithms-js
 */

/**
 * @api public
 * @param {Array} adjmatrix adjacent matrix (two-dimensional array)
 * @return {Array} matrix with all shortest path info (two-dimensional array)
 * @warning graph including negative weight side is not allowed
 * @author Morilence
 */

function floyd(adjmatrix) {
    let matrix = [],
        num = adjmatrix.length;
    for (let start = 0; start < num; start++) {
        matrix[start] = [];
        for (let end = 0; end < num; end++) {
            // initialize
            matrix[start][end] = {
                dist: adjmatrix[start][end],
                path: [start],
            };
        }
    }
    for (let mid = 0; mid < num; mid++) {
        for (let start = 0; start < num; start++) {
            for (let end = 0; end < num; end++) {
                if (matrix[start][end].dist > matrix[start][mid].dist + matrix[mid][end].dist) {
                    matrix[start][end].dist = matrix[start][mid].dist + matrix[mid][end].dist;
                    matrix[start][end].path.push(mid);
                }
                if (mid == num - 1) {
                    matrix[start][end].path.push(end);
                }
            }
        }
    }
    return matrix;
}

/* demo */
let adjm = [
    [0, 2, 6, 4],
    [Infinity, 0, 3, Infinity],
    [7, Infinity, 0, 1],
    [5, Infinity, 12, 0],
];
let fm = floyd(adjm);
for (let i = 0; i < fm.length; i++) {
    let curRow = "";
    for (let j = 0; j < fm.length; j++) {
        curRow += (j == 0 ? "" : ",") + fm[i][j].dist;
    }
    console.log(curRow);
}

module.exports = floyd;
