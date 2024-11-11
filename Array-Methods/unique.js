const arr = [1,6,7,3,8,6,5,1,9,2];

const unique = (array) => {
    let resultArr = [];

    for(let i=0; i < array.length; i++){
        let found = false;
        for(let j=0; j < resultArr.length; j++){
            if(array[i] === resultArr[j]){
                found = true;
                break;
            }
        }
        if(!found){
            resultArr.push(array[i])
        }
    }
    return resultArr
}

const arrayValue = unique(arr)

console.log("arrayValue",arrayValue);