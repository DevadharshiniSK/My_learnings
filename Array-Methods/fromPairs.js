const fromPairs = (pairs) => {
    let result = {};

    for(let i = 0; i < pairs.length; i++){
        const [key, value]  =   pairs[i];
        result[key] = value;
    }
    return result;
}

let pairs = [['x', 1], ['y', 2], ['z', 3]]
let obj = fromPairs(pairs);
console.log(obj)

