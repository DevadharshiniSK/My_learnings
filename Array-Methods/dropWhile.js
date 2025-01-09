const arr = [2,1,8,9,3];

const dropWhile = (array, predicate) => {

    let newArray = [];
    let index = 0;

    for(let i = 0; i < array.length; i++){
        if(!predicate(array[i])){
            index = i;
            break;
        }
    }

    for (let i = index; i < array.length; i++) {
        newArray[newArray.length] = array[i];
    }

    return newArray;
}

const Array_1 = dropWhile(arr, n => n < 3)

console.log("Array_1 :", Array_1);
