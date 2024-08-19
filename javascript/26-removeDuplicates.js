// Intuition
// First thought was to use an extra array to store the new Array and an object to keep track of the added values in the array based on the keys. But the space complexity would be O(n). So thought of an alternate approach which is written below.

// Approach
// Check if length is zero then return 0. Else start a loop from index = 1 to numb.length and take a counter variable writeIndex starts from 1. if the current value is not equal to preview index value then update the value at nums[writeIndex] = nums[i] and increament writeIndex.

// Complexity
// Time complexity:
// O(n)

// Space complexity:
// O(1)

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0

    let writeIndex = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }

    return writeIndex;
};