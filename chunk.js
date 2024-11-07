const arr = [1,2,3,4,5,6,7,8];

const chunk = (array, chunkSize) => {
    let resultArr = [];
    let chunk = [];

    for(let i = 0; i < array.length ; i++){
        chunk.push(array[i]);
        if(chunk.length === chunkSize || i === array.length - 1){
            resultArr.push(chunk)
            chunk = [];
        }
    }
    return resultArr
}

const newArray = chunk(arr, 3);

console.log("newArray: ", newArray);
