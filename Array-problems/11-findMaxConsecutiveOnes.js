function findMaxConsecutiveOnes(arr){
    let maxi = 0;
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 1){
            count++;
            maxi = Math.max(maxi, count)
        }else{
            count = 0;
        }
    }

    return maxi
}

const arr = [1, 1, 0, 1, 1, 1, 0, 1, 1];
console.log(findMaxConsecutiveOnes(arr));
