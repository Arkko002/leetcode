// 60ms 79.96%, 52.46MB 48.72%
function twoSum(nums: number[], target: number): number[] {
  if (nums.length === 2) return [0, 1];

  const nums_copy = nums.slice();
  nums.sort((a, b) => a - b);

  let i = 0;
  let j = nums.length - 1;
  while (i !== j) {
    const sum = nums[i] + nums[j];
    if (sum === target) {
      const i_res = nums_copy.findIndex((value: number) => value === nums[i]);
      const j_res = nums_copy.findIndex((value: number, index: number) =>
        value === nums[j] && index !== i_res
      );
      return [i_res, j_res];
    } else if (sum > target) --j;
    else if (sum < target) ++i;
  }

  return [0, 0];
}

function twoSum2(nums: number[], target: number): number[] {
  const matchIndexes: number[] = [];
  const numsToIndexes: Record<number, number> = {};

  nums.some((secondNum, secondNumIndex) => {
    const firstNum = target - secondNum;
    const firstNumIndex = numsToIndexes[firstNum];
    console.log(
      `firstNum: ${firstNum}, firstNumIndex: ${firstNumIndex}, secondNum: ${secondNum}, secondNumIndex: ${secondNumIndex}`,
    );

    if (typeof firstNumIndex === "number") {
      console.log(`match found: ${firstNumIndex}, ${secondNumIndex}`);
      matchIndexes.push(firstNumIndex, secondNumIndex);

      return true;
    }

    numsToIndexes[secondNum] = secondNumIndex;
    console.log(`numsToIndexes: ${JSON.stringify(numsToIndexes)}`);

    return false;
  });

  return matchIndexes;
}

console.log(twoSum2([1, 2, 3, 4, 5, 6, 7, 8], 10));
