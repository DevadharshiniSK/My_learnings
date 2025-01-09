const rotateArrayByN = (arr, n) => {

    n = n % arr.length;

    for(let i = 0; i < n; i++){
        let last = arr[arr.length - 1];
        for(let j = arr.length - 1; j > 0; j--){
            arr[j] = arr[j - 1];
        }
        arr[0] = last;
    }

    return arr
}

var n = 2;
const array = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArrayByN(array, n));
