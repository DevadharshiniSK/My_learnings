
const leadersInArray = (arr) => {
    let n = arr.length;
    let newArr = [];
    let max = arr[n-1];
    newArr.push(max);

    for(let i = n-2; i >= 0; i--){
        if(arr[i] > max){
            newArr.push(arr[i])
            max = arr[i]
        }
    }

    return newArr
}


let arr = [10, 22, 12, 3, 0, 6];
console.log(leadersInArray(arr));

