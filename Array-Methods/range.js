const range = (start, end, step) => {
    let resultArr = [];

    step = (step === undefined) ? 1 : step;
    end = (end === undefined) ? start : end;
    start = (start === end) ? 0 : start;

    for(let i = start; i < end; i = i + step){
        resultArr.push(i)
    }

    return resultArr
}

console.log("Result array: ",range(0,30,5))
console.log("Result array without Step value",range(2,10))
console.log("Result array without End & Step value",range(5))