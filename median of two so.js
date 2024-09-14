//using two pointer
function findMedianSortedArrays(nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;
    let i = 0,
        j = 0,
        m1 = 0,
        m2 = 0;

    // Find median.
    for (let count = 0; count <= (n + m) / 2; count++) {
        m2 = m1;
        if (i != n && j != m) {
            if (nums1[i] > nums2[j]) {
                m1 = nums2[j++];
            } else {
                m1 = nums1[i++];
            }
        } else if (i < n) {
            m1 = nums1[i++];
        } else {
            m1 = nums2[j++];
        }
    }

    // Check if the sum of n and m is odd.
    if ((n + m) % 2 == 1) {
        return m1;
    } else {
        let ans = m1 + m2;
        return ans / 2.0;
    }
}
}