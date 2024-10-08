const arr1 = [1,2,3,4,5];
const arr2 = [4,5,6,7];

const intersection = (a1, a2) => {
    let finalArray = [];

    for(let i = 0; i < a1.length; i++){
        for(let j = 0; j < a2.length; j++){
            if(arr1[i] === arr2[j]){
                finalArray.push(arr1[i])
            }
        }
    }
    return finalArray
}

const newArray = intersection(arr1, arr2)
console.log("newArray",newArray);