// Res: 56ms 80.50%, 53.72MB 42.46%
function search(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left <= right) {
    const pointer: number = Math.floor((left + right) / 2);

    if (nums[pointer] === target) return pointer;
    else if (nums[pointer] < target) {
      left = pointer + 1;
    } else {
      right = pointer - 1;
    }
  }
  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 2));
