const sortedIndex = (arr, num) => {
    let sortedArray = [...arr];
    let n = sortedArray.length;
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(sortedArray[i] > sortedArray[j]){
                let temp = arr[i];
                sortedArray[i] = sortedArray[j];
                sortedArray[j] = temp;
            }
        }
    }

    let index = 0;
    while(index < n && sortedArray[index] < num){
        index++;
    }
    return index;
}

const array = [3,7,1,4,9,8,2,6];
const resultIndex = sortedIndex(array, 5)
console.log("resultIndex: ", resultIndex)
