// Brute
// const LongestSubarray = (arr, num) => {
//     let n = arr.length;
//     let len = 0;

//     for(let i = 0; i < n; i++){
//         let sum = 0;
//         for(let j = i; j < n; j++){
//             sum+=arr[j];
//             if(sum === num){
//                 len = Math.max(len, j-i+1)
//             }
//         }
//     }

//     return len

// }

// const arr = [2, 3, 5, 1, 9];
// const num = 10;
// console.log(LongestSubarray(arr, num));


// Better

// const LongestSubarray = (arr, num) => {
//     let n = arr.length;
//     let preSumMap = new Map();

//     let sum = 0;
//     let maxLength = 0;

//     for(let i = 0; i < n; i++){
//         sum+=arr[i];
//         if(sum === num){
//             length = Math.max(maxLength, i+1)
//         }

//         let rem = sum - num;

//         if(preSumMap.has(rem)){
//             let length = i - preSumMap.get(rem);
//             maxLength = Math.max(length, maxLength)
//         }

//         if(!preSumMap.has(sum)){
//             preSumMap.set(sum, i)
//         }
//     }

//     return maxLength

// }

// const arr = [2, 3, 5, 1, 9];
// const num = 10;
// console.log(LongestSubarray(arr, num));

// optimal

const LongestSubarray = (arr, num) => {
    let n = arr.length;
    
    let left = 0, right = 0;
    let maxLength = 0;
    let sum = arr[0];

    while(right < n){
        if(left <= right && sum > num){
            sum-=arr[left];
            left++;
        }

        if(sum === num){
            maxLength = Math.max(maxLength, right-left+1);
        }
        
        right++;
        if(right < n){
            sum+=arr[right];
        }
    }

    return maxLength

}

const arr = [2, 3, 5, 1, 9];
const num = 10;
console.log(LongestSubarray(arr, num));


