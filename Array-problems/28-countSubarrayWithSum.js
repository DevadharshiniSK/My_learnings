const subarraySum = (arr, k) => {
        let n = arr.length;
        let count = 0;
        for(let i = 0; i < n; i++){
            let sum = 0;
            for(let j = i; j < n; j++){
                sum += arr[j];
                if(sum === k){
                    count++;
                }
            }
        }
    
        return count;
}

let arr = [2, 3, 2, 4, 1]
let sum = 5;
console.log(subarraySum(arr, sum));
