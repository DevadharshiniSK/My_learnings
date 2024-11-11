let arr = [3,4,5,12,18,17,9];

const lastValue = (array) => {
    for(let i = array.length-1; i <= array.length; i--){
        if(array[i]){
            return array[i];
        }
    }
}

const arrayLast = lastValue(arr)

console.log("arrayLast :",arrayLast);