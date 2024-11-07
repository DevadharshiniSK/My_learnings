const arr = [1,2,3,4,5];

const remove = (array, filterFunc) => {
    let newArr = [];

    for(let i = 0; i < array.length; i++){
        if(filterFunc(array[i])){
            newArr.push(array[i]);
        }
    }

    return newArr
};

const arrayValue = remove(arr, function (n) { return n % 2 === 0 });

console.log("arrayValue: ",arrayValue);
