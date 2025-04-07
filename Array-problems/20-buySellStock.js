const maxProfit = (arr) => {
    let cost = arr[0], profit = 0, maxi = 0; 
    for(let i = 1; i < arr.length; i++){
        profit = arr[i] - cost;
        maxi = Math.max(maxi, profit);
        cost = Math.min(cost, arr[i]);
    }

    return maxi
}

const array = [7,1,5,3,6,4];
console.log(maxProfit(array));
