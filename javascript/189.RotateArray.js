// https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(num, k) {
    k = k % num.length;
    if (k === 0) return num
    let len = num.length;
    reverse(num, 0, len - 1);
    reverse(num, 0, k - 1);
    reverse(num, k, len - 1);
    return num
};

function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp
        start++;
        end--;
    }
}

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var rotate = function(num, k) {

//     let j = num.length - k;
//     let len = num.length;
//     for (let i = 0; i < j/2; i++) {
//         let temp = num[i];
//         num[i] = num[j - i - 1]
//         num[j - i - 1] = temp;
//     }
//     for (let i = 0; i < k/2; i++) {
//         let temp = num[j + i];
//         num[j + i] = num[len - i - 1]
//         num[num.length - i - 1] = temp;
//     }
//     for (let i = 0; i < num.length/2; i++) {
//         let temp = num[i];
//         num[i] = num[num.length - i - 1]
//         num[num.length - i - 1] = temp;
//     }

//     return num
// };