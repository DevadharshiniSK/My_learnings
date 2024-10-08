const arr = [1,2,3,4,1,4,5,6,1];

const findLastIndex = (array, num) => {
    for(let i = array.length-1; i < array.length ; i--){
        if(arr[i] === num){
            return i
        }
    }
    return -1
}

const lastIndexValue = findLastIndex(arr, 4);

console.log("lastIndexValue :", lastIndexValue);