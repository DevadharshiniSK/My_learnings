function leftRotateByOne(arr){
    let temp = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(i === arr.length - 1){
            arr[i] = temp;
        }else{
            arr[i] = arr[i + 1]
        }
    }

    return arr

}

const arr = [1, 2, 3, 4, 5];
console.log(leftRotateByOne(arr));
