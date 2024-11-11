const arr = [1,2,3,"Hello!",4,5];

const initial = (array) => {
    let newArr = [];

    for(let i = 0; i < array.length - 1; i++){
        if(array[i]){
            newArr.push(array[i])
        }
    }
    return newArr
}

const initialValue = initial(arr);

console.log("initialValue",initialValue);
