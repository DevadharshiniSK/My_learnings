const arr = [1,2,7,5,6];

const dropRight = (array, n) => {
    let newArray = [];

    n = (n === undefined) ? 1 : n;

    for(let i = 0; i < array.length - n; i++){
        newArray.push(array[i])
    }
     
    return newArray
}

const Array_1 = dropRight(arr, 2)
const Array_2 = dropRight(arr)

console.log("Array_1 :", Array_1);
console.log("Array_2 :", Array_2);