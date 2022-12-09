var maxArea = function(height) {
    let max = 0;
    let p1 = 0, p2 = height.length - 1;
    while (p1 < p2) {
        let size = Math.min(height[p1], height[p2])
        let area = size * (p2 - p1);
        if (area > max) max = area;
        if (height[p1] > height[p2]) p2--;
        else p1++;
    }
    return max;
};