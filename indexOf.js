const arr = [1,2,3,4,1,4,5,6,1];

const indexOf = (array, num, index) => {
    for(let i = index; i < array.length ; i++){
        if(arr[i] === num){
            return i
        }
    }

    return -1
}

const indexValue = indexOf(arr, 1, 5);     //(array, num, from which index)

console.log("indexOf 1 from 5th index :", indexValue);