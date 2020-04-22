/*!
 * Dijkstra
 * https://github.com/Morilence/Algorithms-js
 */

/**
 * @api public
 * @param {Array} adjmatrix adjacent matrix (two-dimensional array)
 * @return {Array} matrix with all shortest path info (two-dimensional array)
 * @warning graph including negative weight side is not allowed
 * @author Morilence
 */

function dijkstra(adjmatrix) {
    let matrix = [],
        num = adjmatrix.length;
    visited = [];
    for (let start = 0; start < num; start++) {
        matrix[start] = [];
        for (let end = 0; end < num; end++) {
            // initialize
            matrix[start][end] = {
                dist: adjmatrix[start][end],
                path: [start],
            };
        }
        visited = [start];
        while (visited.length < num) {
            let ptr = 0,
                shortest = Infinity;
            for (let mid = 0; mid < num; mid++) {
                if (visited.indexOf(mid) == -1 && matrix[start][mid].dist < shortest) {
                    shortest = matrix[start][mid].dist;
                    ptr = mid;
                }
            }
            for (let end = 0; end < num; end++) {
                // the row pointed by ptr may has not be initialized, so origin adjmatrix still need to be used.
                if (shortest + adjmatrix[ptr][end] < matrix[start][end].dist) {
                    matrix[start][end].dist = shortest + adjmatrix[ptr][end];
                    matrix[start][end].path.push(ptr);
                }
            }
            visited.push(ptr);
        }
        for (let end = 0; end < num; end++) {
            matrix[start][end].path.push(end);
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
let dm = dijkstra(adjm);
for (let i = 0; i < dm.length; i++) {
    let curRow = "";
    for (let j = 0; j < dm.length; j++) {
        curRow += (j == 0 ? "" : ",") + dm[i][j].dist;
    }
    console.log(curRow);
}

module.exports = dijkstra;
