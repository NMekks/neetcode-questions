class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map();

        for (let i = 0; i < nums.length; i++){
            const difference = target - nums[i];
            if(hashMap.has(difference)) {
                return [hashMap.get(difference), i];
            }
            hashMap.set(nums[i], i);
        }
        return [];
    }
}

//we create a hashmap but we wont initialize all the array's values in it
//we keep the hashmap empty, iterate throught the array (one way)
//we will find the difference between the target number and each item in the array
//the value of the difference, plus the element we used to subtract will give us the target
//hence the "two sums"
//we'll first find the difference between the target and the 1st element in the array
//if the value of the difference doesnt exist in the hashmap
//only then can we add element we used in the subtraction and it's index to the hashmap
//we move on to the second element, subtract, add it to the hashmap if it doesnt exist
//and so on and so forth until the didfference and the element sum up to the target
