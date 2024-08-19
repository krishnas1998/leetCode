
// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.


var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length

    let writeIndex = 2;
    for (let i = 2; i < nums.length ; i++) {
        if (nums[i] !== nums[writeIndex-2]) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    return writeIndex
};




// Initial Approach

// var removeDuplicates = function(nums) {
//     if (nums.length <= 0) return 0

//     let writeIndex = 1;
//     let dupCount = 0;
//     for (let i = 1; i < nums.length ; i++) {
//         if (nums[i] !== nums[i-1]) {
//             dupCount = 0;
//             nums[writeIndex] = nums[i];
//             writeIndex++;
//         } else {
//             dupCount++;
//             if (dupCount === 1) {
//                 writeIndex++;
//             }
//         }
//     }
//     if (dupCount !==0) {
//         nums[writeIndex-1] = nums[nums.length-1];
//     }
//     return writeIndex
// };