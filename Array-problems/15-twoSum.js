function twoSum(arr, sum){
    let n = arr.length;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(arr[i] + arr[j] === sum){
                return [i, j]
            }
        }
    }

    return -1
}

let array = [2,7,11,15]
let sum = 9;
console.log(twoSum(array, sum));

