const arr1 = [1,2,3,4,5];
const arr2 = [4,5,6,7];

const union = (a1, a2) => {
    let resultArr = [];

    for(let i = 0; i < a1.length; i++){
        resultArr.push(a1[i])
    }

    for(let i = 0; i < a2.length; i++){
        let found = false;
        for(let j = 0; j < resultArr.length; j++){
            if(a2[i] === resultArr[j]){
                found  =  true;
                break;
            }
        }
        if(!found){
            resultArr.push(a2[i])
        }
    }
    

    return resultArr
}

const newArray = union(arr1, arr2)
console.log("newArray",newArray);