const arr = [1,6,7,3,8,6,5,1,9,2];

const pull = (array, num) => {
    let index = 0

    for(let i=0; i < array.length; i++){
        if(array[i] !== num){
            array[index] = array[i];
            index++;
        }
    }
}

pull(arr, 1)

console.log("arr",arr);