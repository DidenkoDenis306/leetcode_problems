function twoSum(nums: number[], target: number): number[] {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - nums[i];

        if (complement in map) {
            return [map[complement], i];
        }

        map[currentNum] = i;
    }
};
