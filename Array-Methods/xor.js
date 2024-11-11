const arr1 = [1,2,3,4,5];
const arr2 = [4,5,6,7];

const symmetricDifference = (a1, a2) => {
    let finalArray = [];

    for(let i = 0; i < a1.length; i++){
        let found = false;
        for(let j = 0; j < a2.length; j++){
            if(a1[i] === a2[j]){
               found = true;
               break;
            }
        }
        if(!found){
            finalArray.push(a1[i]);
        }
    }

    for(let i = 0; i < a2.length; i++){
        let found = false;
        for(let j = 0; j < a1.length; j++){
            if(a2[i] === a1[j]){
               found = true;
               break;
            }
        }
        if(!found){
            finalArray.push(a2[i]);
        }
    }

    return finalArray
}

const newArray = symmetricDifference(arr1, arr2)
console.log("newArray",newArray);