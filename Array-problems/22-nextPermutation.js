const nextPermutation = (arr) => {
    let n = arr.length;
    let index = -1;

    for(let i = n-2; i >= 0; i--){
        if(arr[i] < arr[i+1]){
            index = i;
            break;
        }
    }

    const reverse = (start, end) => {
        for(let i = start, j = end; i < j; i++, j--){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp; 
        }
    }

    if(index == -1){
        reverse(0, n-1)
    }

    for(let i = n-1; i > index; i++){
        if(arr[i] > arr[index]){
            [arr[i], arr[index]] = [arr[index], arr[i]];
            break;
        }
    }

    reverse(index+1, n-1)

    return arr
}


const arr = [1, 3, 2];
console.log(nextPermutation(arr));
