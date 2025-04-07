
const LongestSubarray = (arr, num) => {
    let n = arr.length;
    let preSumMap = new Map();

    let sum = 0;
    let maxLength = 0;

    for(let i = 0; i < n; i++){
        sum+=arr[i];
        if(sum === num){
            length = Math.max(maxLength, i+1)
        }

        let rem = sum - num;

        if(preSumMap.has(rem)){
            let length = i - preSumMap.get(rem);
            maxLength = Math.max(length, maxLength)
        }

        if(!preSumMap.has(sum)){
            preSumMap.set(sum, i)
        }
    }

    return maxLength

}

const arr = [12, -1, 0, -1, 8];
const num = 10;
console.log(LongestSubarray(arr, num));