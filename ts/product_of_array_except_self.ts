function productExceptSelf(nums: number[]): number[] {
  // let matrix: number[][] = [];
  let product: number = 1;
  for (let i = 0; i < nums.length; i++) {
    // matrix[i] = product;
    product *= nums[i];
  }

  const result: number[] = [];
  for (const num of nums) {
    result.push(divideWithSubstraction(product, num));
  }

  return result;
}

const divideWithSubstraction = (a: number, b: number): number => {
  if (a === 0 || b === 0) {
    return 0;
  }

  let a_abs = Math.abs(a);
  let b_abs = Math.abs(b);

  let result: number = 0;
  while (a_abs >= b_abs) {
    a_abs -= b_abs;
    result++;
  }

  if (0 > a || 0 > b && !(0 > a && 0 > b)) {
    result = -result;
  }

  return result;
};

[1, 2, 2, 2, 2, 2, 2, 2];
[1, 2, 4, 8, 16, 32, 64, 128];
