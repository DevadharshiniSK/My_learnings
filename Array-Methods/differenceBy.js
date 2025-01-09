const arr1 = [1.1, 2.3, 3.7, 4.3, 5.7];
const arr2 = [4.2, 5.1, 6.4, 7.4];

const differenceBy = (a1, a2, floor) => {
    let resultArr = [];
    
    let newArray1 = [];
    for(let i=0; i<a1.length; i++){
        newArray1[i] =  floor(a1[i]) 
    }

    let newArray2 = [];
    for(let j=0; j<a2.length; j++){
        newArray2[j] =  floor(a2[j]) 
    }

    for(let i=0; i<newArray1.length ;i++){
        let found = false;

        for(let j=0; j<newArray2.length; j++){
            if(newArray1[i] === newArray2[j]){
                found = true;
                break;
            }
        }

        if(!found){
            resultArr[i] = a1[i];
        }
    }

    return resultArr;

}

const newArray = differenceBy(arr1, arr2, Math.floor)
console.log("newArray",newArray);
