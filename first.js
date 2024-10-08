let arr = [3,4,5,12,18,17,9];

const firstValue = (array) => {
    for(let i=0; i <= array.length; i++){
        if(arr[i]){
            return arr[i];
        }
    }
}

const arrayFirst = firstValue(arr)

console.log("arrayFirst",arrayFirst);