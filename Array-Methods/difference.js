const arr1 = [1,2,3,4,5];
const arr2 = [4,5,6,7];

const difference = (a1, a2) => {
    let diffArray = [];

    for(let i=0; i<a1.length; i++){
        let found = false;

        for(let j=0; j<a2.length; j++){
            if(a1[i] === a2[j]){
                found = true
                break;
            }
        }
        if(!found){
            diffArray.push(a1[i])
        }
    }
    return diffArray
}

const newArray = difference(arr1, arr2)
console.log("newArray",newArray);
