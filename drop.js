const arr = [1,2,7,5,6];

const drop = (array, n) => {
    let newArray = [];

    n = (n === undefined) ? 1 : n;

    for(let i = n; i < array.length; i++){
        newArray.push(arr[i])
    }
     
    return newArray
}

const Array_1 = drop(arr, 2)
const Array_2 = drop(arr)

console.log("Array_1 :", Array_1);
console.log("Array_2 :", Array_2);
