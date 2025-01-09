// const numbers = [1, 2, 3, 4, 5];

// // Drop elements from the end while they are greater than 3
// _.dropRightWhile(numbers, n => n > 3);
// // Output: [1, 2, 3]

const arr = [1,2,3,4,5,6,7];

const dropRightWhile = (array, predicate) => {

    let newArray = [];
    let index = array.length;

    for(let i = array.length-1 ; i >= 0; i--){
        if(!predicate(array[i])){
            index = i;
            break;
        }
    }

    for (let i = 0; i < index + 1; i++) {
        newArray.push(array[i]);
    }

    return newArray;
}

const Array_1 = dropRightWhile(arr, n => n < 3)

console.log("Array_1 :", Array_1);