function largestNum(arr) {
    let max = arr[0];
        
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    
    return max;
}

const array = [1, 8, 7, 56, 90];
console.log(largestNum(array));
