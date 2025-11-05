class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashSet = new Set();
        for(const num of nums) {
            if (hashSet.has(num)) {
                return true;
            }
            hashSet.add(num);
        }
        return false;
    }
}
//time complexity O(n), space complexity O(n)
//we sacrifice space complexity in order to decrease time complexity
//O(n^2) -- unsorted-- or O(nlogn) --after sorting-- by creating a hash table
//and inserting the numbers we check for the first time into the hash table
//which of course takes up some space, increasing the space complexity
//but this imporves time complexity since we dont have to loop through
//the array again comparing every two numbers in order to find duplicates
