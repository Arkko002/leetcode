const productExceptSelf = (nums: number[]): number[] => {
  const n: number = nums.length;

  console.log(`input: ${JSON.stringify(nums)}`);
  // for a given i, prefix[i] stores product of all previous elements, suffix[i] stores product of all next elements
  const prefix: number[] = new Array(n).fill(1);
  const suffix: number[] = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
    console.log(`prefix: ${JSON.stringify(prefix)}`);
  }

  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
    console.log(`suffix: ${JSON.stringify(suffix)}`);
  }

  const answer: number[] = [];
  for (let i = 0; i < n; i++) {
    console.log(`answer: ${JSON.stringify(answer)}`);
    answer[i] = prefix[i] * suffix[i];
  }

  return answer;
};

console.log(`answer: ${JSON.stringify(productExceptSelf([1, 2, 3, 4]))}`);
