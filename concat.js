const array_1 = [1,2,3,4,5];
const array_2 = [5,6,7,8,9];

const concat = (arr1, arr2) => {
    let resultArr = [];

    for(let i = 0; i < arr1.length ; i++){
        resultArr.push(arr1[i])
    }

    for(let j = 0; j < arr2.length ; j++){
        resultArr.push(arr2[j])
    }

    return resultArr
}

const newArray = concat(array_1, array_2);
console.log("newArray",newArray);
