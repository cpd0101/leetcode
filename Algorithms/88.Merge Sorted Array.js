/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
	nums1.splice(m, nums1.length - m);
	if (nums1.length < 1) {
		for (var i = 0; i < n; i++) {
			nums1.push(nums2[i]);
		}
		return;
	}
	var last = 0;
    for (var i = 0; i < n; i++) {
    	for (var j = last; j < nums1.length; j++) {
    		if (nums2[i] > nums1[j]) {
    			if (j < nums1.length - 1) {
    				if (nums2[i] < nums1[j + 1]) {
    					nums1.splice(j + 1, 0, nums2[i]);
    					last = j + 1;
    					break;
    				}
    			} else {
    				nums1.push(nums2[i]);
    				last = j + 1;
    				break;
    			}
    		} else {
    			if (j) {
    				nums1.splice(j, 0, nums2[i]);
    				break;
    			} else {
    				nums1.unshift(nums2[i]);
    			}
    			last = j;
    			break;
    		}
    	}
    }
};