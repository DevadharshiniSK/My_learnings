let arr = [0, 1, 2, "", "Hello!", false, true, null, undefined];

const getValues = (values) => {
    const newArr = [];
    for(let i=0; i <= values.length; i++){
        if(arr[i]){
            newArr.push(arr[i])
        }
    }
    return newArr
}

const arrayValue = getValues(arr)

console.log("arrayValue",arrayValue);
