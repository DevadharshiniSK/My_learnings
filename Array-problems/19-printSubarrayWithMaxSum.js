// Print Maximun Sum Subarray using Kadane's Algorithm

const maxSubArray = (arr) => {
    let n = arr.length;
    let sum = 0, maxi = Number.MIN_SAFE_INTEGER;
    let arrStart, arrEnd, start = 0;

    for(let i = 0; i < n; i++){
        sum += arr[i];

        if(sum > maxi){
            maxi = sum;
            arrStart = start; arrEnd = i;
        }

        if(sum < 0){
            sum = 0;
            start = i + 1
        }
    }

    let subArray = []
    for( let i = arrStart; i <= arrEnd; i++){
        subArray.push(arr[i])
    }

    return subArray
}

const array = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(array));