const array1 = [{id : 1}, {id : 2}, {id : 3}];
const array2 = [{id : 3}];

const differenceWith = (a1, a2) => {
    let diffArray = [];

    for(let i=0; i<a1.length; i++){
        let found = false;

        for(let j=0; j<a2.length; j++){
            if(a1[i].id === a2[j].id){
                found = true
                break;
            }
        }
        if(!found){
            diffArray[i] = (a1[i])
        }
    }
    return diffArray
}

const newArray = differenceWith(array1, array2)
console.log("newArray: ", newArray);
