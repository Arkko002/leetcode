function topKFrequent(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map();
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num)! + 1);
    }
  }

  return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map((e) =>
    e[0]
  );
}

interface FrequencyLinkedListNode {
  key: number;
  count: number;
  prev: FrequencyLinkedListNode | null;
  next: FrequencyLinkedListNode | null;
}
