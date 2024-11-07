const arr = [1,6,7,3,8,6,5,1,9,2];

const without = (array, num) => {
    let resultArr = [];

    for(let i=0; i < array.length; i++){
        if(array[i] !== num){
            resultArr.push(array[i])
        }
    }
    return resultArr
}

const arrayValue = without(arr, 1)

console.log("arrayValue",arrayValue);