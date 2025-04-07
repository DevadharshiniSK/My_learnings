// Sorting 0's, 1's, 2's in an array using DUTCH NATIONAL FLAG ALGORITHM

const sortColors = (arr) => {
    let n = arr.length;
    let low = 0, mid = 0, high = n -1;

    while(mid <= high){
        for(let i = 0; i < n; i++){
            if(arr[mid] === 0){
                [arr[mid], arr[low]] = [arr[low], arr[mid]]
                low++;
                mid++
            }else if(arr[mid] === 1){
                mid++;
            }else{
                [arr[mid], arr[high]] = [arr[high], arr[mid]]
                high--;
            }
        }
    }

    return arr
}

const array = [2,0,2,1,1,0];
console.log(sortColors(array));

