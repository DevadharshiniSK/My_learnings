var rotate = (arr, k) => {
    let n = arr.length;
    k = k % n;

    const reverse = (start, end) => {
        for(let i = start, j = end; i < j; i++, j--){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp; 
        }
    }

    reverse(0, n-1);
    reverse(0, k-1);
    reverse(k, n-1);

    return arr;
}

var k = 3;
const array = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(array, k));
