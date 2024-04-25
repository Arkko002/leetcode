function groupAnagrams(strs: string[]): string[][] {
  const result: Map<string, string[]> = new Map();
  for (const str of strs) {
    const letters: string = str.split("").sort().join();

    const res_arr: string[] | undefined = result.get(letters);

    if (res_arr) {
      res_arr.push(str);
    } else {
      result.set(letters, [str]);
    }
  }

  return Array.from(result.values());
}

console.log(groupAnagrams(["ddddddddddg", "dgggggggggg"]));

function groupAnagrams2(strs: string[]): string[][] {
  const result = [];
  const dic = new Map();

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const unique = word.split("").sort().join("");

    if (dic.has(unique)) {
      result[dic.get(unique)].push(word);
    } else {
      dic.set(unique, result.length);
      result.push([word]);
    }
  }

  return result;
}
