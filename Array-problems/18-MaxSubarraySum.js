// Maximun Subarray Sum using Kadane's Algorithm

// Better Solution
// const maxSubArray = (arr) => {
//     let n = arr.length;
//     let maxi = 0;
//     for(let i = 0; i < n; i++){
//         let sum = 0;
//         for(let j = i; j < n; j++){
//             sum += arr[j];
//             maxi = Math.max(maxi, sum)
//         }
//     }

//     return maxi;
// }

const maxSubArraySum = (arr) => {
    let n = arr.length;
    let sum = 0, maxi = 0;

    for(let i = 0; i < n; i++){
        sum += arr[i];

        if(sum > maxi){
            maxi = sum;
        }

        if(sum < 0){
            sum = 0
        }
    }

    return maxi;
}

const array = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArraySum(array));
