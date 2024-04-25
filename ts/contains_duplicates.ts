// RES: 83ms ex. time (58.37%), 63.75MB mem. use (25%)
function containsDuplicate(nums: number[]): boolean {
  const nums_set: Set<number> = new Set();
  for (const number of nums) {
    if (nums_set.has(number)) {
      return true;
    } else nums_set.add(number);
  }

  return false;
}

// TIME LIMIT EXCEEDED
function containsDuplicate2(nums: number[]): boolean {
  return nums.some((value: number, index: number) => {
    return undefined !== nums.find((otherValue: number, otherIndex: number) => {
      if (value === otherValue && index !== otherIndex) {
        return true;
      }
      return false;
    });
  });
}

// RES 103ms ex time (12.24%), 61.52MB mem. use (84.89%)
function containsDuplicate3(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}

// TIME LIMIT EXCEEDED
function containsDuplicate4(nums: number[]): boolean {
  while (nums.length) {
    const val: number[] = nums.splice(nums.length - 1, 1);
    const is_duplicated: boolean = nums.includes(val[0]);
    if (is_duplicated) {
      return true;
    }
  }

  return false;
}
