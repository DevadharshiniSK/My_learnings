const arr1 = [1,2,3,4,5];
const arr2 = [4,5,6,7];

const zip = (a1, a2) => {
    let resultArr = [];
    let minLength = a1.length > a2.length ? a2.length : a1.length

    for(let i = 0; i < minLength; i++){
        resultArr[i] = [a1[i], a2[i]]
    }
    return resultArr
}

const newArray = zip(arr1, arr2)
console.log("newArray",newArray);