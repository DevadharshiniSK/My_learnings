var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            nums[i+1] = nums[j];
            i++;
        }
    }
    return i + 1;
};

const arr = [1,1,2];
console.log(removeDuplicates(arr))