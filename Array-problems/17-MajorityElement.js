// Majority Element (n/2 times)

const majorityElement = (arr) => {
    let n = arr.length;
    let element, count = 0;

    for(let i = 0; i < n; i++){
        if(count == 0){
            element = arr[i];
            count++;
        }else if(element == arr[i]){
            count++;
        }else{
            count--;
        }
    }

    let count1 = 0;
    for(let i = 0; i < n; i++){
        if(arr[i] === element){
            count1++;
        }
    }

    if(count1 > n/2){
        return element
    }
    return -1;
}

const arr = [2,2,1,1,1,2,2];
console.log(majorityElement(arr));
