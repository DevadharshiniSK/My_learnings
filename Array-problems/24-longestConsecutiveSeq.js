function longestConsecutive(arr){
    let n = arr.length;
    let smallest = -Infinity, longest = 1, count = 0;
    for (let i = 0; i < n ; i++) {
        for (let j = i+1; j < n; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    for(let i = 0; i < n; i++){
        if(arr[i] - 1 === smallest){
            count+=1;
            smallest = arr[i];
        }else if(arr[i] !== smallest){
            count = 1;
            smallest = arr[i]
        }
        longest = Math.max(longest, count)
    }

    return longest

}

let array = [100,4,200,1,3,2];
console.log(longestConsecutive(array));
