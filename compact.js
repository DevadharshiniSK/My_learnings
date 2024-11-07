let arr = [0, 1, 2, "", "Hello!", false, true, null, undefined];

const getValues = (array) => {
    const newArr = [];
    for(let i=0; i <= array.length; i++){
        if(array[i]){
            newArr.push(array[i])
        }
    }
    return newArr
}

const arrayValue = getValues(arr)

console.log("arrayValue",arrayValue);
