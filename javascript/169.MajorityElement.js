//https://leetcode.com/problems/majority-element/

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


var majorityElement = function(nums) {
    let count = 0;
    let result = null;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
        
            result = nums[i];
        }
        count += (result === nums[i]) ? 1 : -1;
    }
    return result;
};


// Initial Approach
// var majorityElement = function(nums) {
    
//     const obj = {}
//     let result = nums[0];
//     const maxCount = Math.floor(nums.length / 2);
//     for (let i = 0; i < nums.length; i++) {
//         if (!obj[nums[i]]) {
//             obj[nums[i]] = 1;
//             continue;
//         }
//         obj[nums[i]]++;
//         if (obj[nums[i]] > maxCount) {
//             result = nums[i];
//             break;
//         }
            
//     }
//     return result;
// };