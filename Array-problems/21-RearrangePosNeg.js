function rearrangeArray(arr){
    let n = arr.length;
    let newArray = new Array(n).fill(0);

    let posIndex = 0, negIndex = 1;
    for(let i = 0; i < n; i++){
        if(arr[i] < 0){
            newArray[negIndex] = arr[i];
            negIndex += 2;
        }else{
            newArray[posIndex] = arr[i];
            posIndex += 2;
        }
    }

    return newArray;
}


const arr = [3,-2,-5,1,2,-4];
console.log(rearrangeArray(arr));
