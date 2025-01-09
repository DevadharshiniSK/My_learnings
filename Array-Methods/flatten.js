const flatten = (array) => {
    let resultArr = [];

    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            resultArr = resultArr.concat(array[i])
        }
        else{
            resultArr[resultArr.length] = array[i]
        }
    }

    return resultArr
}

const nestedArray = [1,2,[3,[4,5,[6,7]]]];
console.log("Flatten Array: ",flatten(nestedArray))