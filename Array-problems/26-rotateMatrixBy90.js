// const rotate = (matrix) => {
//     let row = matrix.length;
//     let col = matrix[0].length;
//     let result = [];

//     for(let i = 0; i < col; i++){
//         result[i] = [];
//         for(let j = 0; j < row; j++){
//             result[i][j] = matrix[row-j-1][i];
//         }
//     }

//     return result
// }

const rotate = (matrix) => {
    let n = matrix.length;

    for(let i = 0; i < n; i++){
        for(let j = i+1; j < n; j++){
            [matrix[i][j], matrix[j][i]]  =  [matrix[j][i], matrix[i][j]]
        }
    }

    for(let i = 0; i < n; i++){
        let start = 0;  let end = n-1; let temp;
        while(start <= end){
            temp = matrix[i][start];
            matrix[i][start] = matrix[i][end];
            matrix[i][end] = temp;
            start++;
            end--;
        }
    }

    return matrix
}

let matrix = [[1, 2, 3], 
              [4, 5, 6], 
              [7, 8, 9]];

console.log(rotate(matrix));


// (0,0) (0,1) (0,2)   1 2 3     7 4 1
// (1,0) (1,1) (1,2)   4 5 6     8 5 2
// (2,0) (2,1) (2,2)   7 8 9     9 6 3

// (2,0) (1,0) (0,0)
// (2,1) (1,1) (0,1)
// (2,2) (1,2) (0,2)