class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if ( s.length !== t.length ) {
            return false;
        }

        let sSorted = s.split('').sort().join();
        let tSorted = t.split('').sort().join();

        if( sSorted == tSorted ){
            return true;
        }
        return false;
    }
}

//time complexity of sorting is O(nlogn) since we're splitting the string
//the space complexity is O(1) or O(n) depending on the algorith used
//but generally sorting doesnt take any extra memory so usually its O(1)
