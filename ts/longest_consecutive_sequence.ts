function longestConsecutive(nums: number[]): number {
  const unique_nums: Set<number> = new Set(nums);
  let longest_sequence: number = 0;

  for (const num of unique_nums) {
    if (!unique_nums.has(num - 1)) {
      let current_sequence: number = 1;
      while (unique_nums.has(num + current_sequence)) {
        current_sequence++;
      }
      longest_sequence = Math.max(current_sequence, longest_sequence);
    }
  }

  return longest_sequence;
}
