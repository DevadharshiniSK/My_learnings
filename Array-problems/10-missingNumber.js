function missingNumber(arr){
    let n = arr.length;
    let sum = n * (n+1)/2;

    let s2 = 0;
    for(let i = 0; i < arr.length; i++){
        s2+=arr[i];
    }

    return sum - s2;
}

const arr = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(arr));
