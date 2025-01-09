// (0,2,4) fill with 0 from position 2 to position 4
// (5,1) Fill with 5 from position 1
// (6) Fill with 6

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const fill = (arr, value, startIndex, endIndex) => {
    const start = startIndex ? startIndex : 0;
    const end = endIndex ? endIndex : arr.length;
    for(let i = start; i < end; i++){
        arr[i] = value;
    }
    return arr;
}

const case1 = fill([...array], 0, 1, 5);
console.log("Case 1: ", case1);
const case2 = fill([...array], 9, 5);
console.log("Case 2: ", case2);
const case3 = fill([...array], 0);
console.log("Case 3: ", case3);