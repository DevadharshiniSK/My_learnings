// const markRow = (matrix, col, i) => {
//     for(let j = 0; j < col; j++){
//         if(matrix[i][j] !== 0){
//             matrix[i][j] = -1
//         }
//     }
// }

// const markCol = (matrix, row, j) => {
//     for(let i = 0; i < row; i++){
//         if(matrix[i][j] !== 0){
//             matrix[i][j] = -1
//         }
//     }
// }

// const setZeroes = (matrix, row, col) => {
//     for(let i = 0; i < row; i++){
//         for(let j = 0; j < col; j++){
//             if(matrix[i][j] === 0){
//                 markRow(matrix, col, i);
//                 markCol(matrix, row, j);
//             }
//         }
//     }

//     for(let i = 0; i < row; i++){
//         for(let j = 0; j < col; j++){
//             if(matrix[i][j] === -1){
//                 matrix[i][j] = 0
//             }
//         }
//     }

//     return matrix
// }

// let matrix = [[0,1,2,0],
//               [3,4,5,2],
//               [1,3,1,5]];
// let n = matrix.length;
// let m = matrix[0].length;
// console.log(setZeroes(matrix, n, m))



const setZeroes = (matrix) => {
    let n = matrix.length;
    let m = matrix[0].length;
    let row = new Array(n).fill(0);
    let col = new Array(m).fill(0);

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(matrix[i][j] === 0){
                row[i] = 1;
                col[j] = 1;
            }
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(row[i] || col[j]){
                matrix[i][j] = 0
            }
        }
    }

    return matrix
}

let matrix = [[0,1,2,0],
              [3,4,5,2],
              [1,3,1,5]];
console.log(setZeroes(matrix))