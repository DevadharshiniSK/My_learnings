let arr = [3,4,5,12,18,17,9];

const head = (array) => {
    for(let i=0; i <= array.length; i++){
        if(array[i]){
            return array[i];
        }
    }
}

const arrayFirst = head(arr)

console.log("arrayFirst",arrayFirst);