const arr = [1,2,3,4,1,4,5,6,1];

const findIndex = (array, num) => {
    for(let i = 0; i < array.length ; i++){
        if(array[i] === num){
            return i
        }
    }

    return -1
}

const indexValue = findIndex(arr, 6);

console.log("indexValue :", indexValue);

