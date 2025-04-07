const check = (arr) => {
    let breakCount = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[(i+1)%arr.length]){
            breakCount++;
        }
    }

    return breakCount <= 1
}

const array = [3,4,5,1,2];
var result = check(array);
console.log(result)