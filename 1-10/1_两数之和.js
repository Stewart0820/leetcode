/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums=[2,7,11,15]
let target = 9
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    //nums.splice(0,1);   //删除数组第一个元素
    num = nums.filter(function(item) {
      return item != nums[0]
    });
    for (let j = 0; j < num.length; j++) {
      if (nums[i]+num[j]==target) {
        j=j+1
        console.log("["+i+","+j+"]"); 
      }      
    }
  }
};
twoSum(nums,target)