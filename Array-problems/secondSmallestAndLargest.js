function findSecondLargestAndSmallest(arr){
    if(arr.length < 2){
        console.log("Array must have more than 2 elements");
    }

    let smallest = Infinity, secondSmallest = Infinity;
    let largest = -Infinity, secondLargest = -Infinity;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
        if(arr[i] > largest){
            largest = arr[i];
        }
    }

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > smallest && arr[i] < secondSmallest){
            secondSmallest = arr[i];
        }
        if(arr[i] < largest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }

    return{
        "Second Smallest Element" : secondSmallest,
        "Second Largest Element" : secondLargest,
    }
}

const arr = [7, 1, 3, 4, 1, 9, 6];
console.log(findSecondLargestAndSmallest(arr));