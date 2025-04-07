const singleNumber = (arr) => {
    let xor = 0;

    for(let i = 0; i < arr.length; i++){
        xor = xor ^ arr[i];
    }

    return xor
}

const arr = [1, 2, 2, 3, 3, 4, 4]
console.log(singleNumber(arr));
