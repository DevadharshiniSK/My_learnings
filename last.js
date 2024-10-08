let arr = [3,4,5,12,18,17,9];

const lastValue = (array) => {
    for(let i = array.length-1; i <= array.length; i--){
        if(arr[i]){
            return arr[i];
        }
    }
}

const arrayLast = lastValue(arr)

console.log("arrayLast :",arrayLast);