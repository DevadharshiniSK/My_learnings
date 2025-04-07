const linearSearch = (arr, n) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === n){
            return i;
        }
    }

    return -1;
}

const arr = [2,3,5,8,9,0,1,4,7];
const num = 6;
console.log(linearSearch(arr, num));

