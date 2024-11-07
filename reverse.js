const array = [11,21,31,41,51,61];

const reverse = (arr) => {
    let resultArr = [];

    for(let i = arr.length - 1; i >= 0; i--){
        resultArr.push(arr[i])
    }

    return resultArr
}

const reverseArray = reverse(array);
console.log("reverseArray: ",reverseArray);
