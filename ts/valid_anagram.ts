// 75ms (61.8%), 53.53MB (70.34%)
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sMap: Map<string, number> = new Map();
  const tMap: Map<string, number> = new Map();

  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) sMap.set(s[i], sMap.get(s[i])! + 1);
    else sMap.set(s[i], 1);
    if (tMap.has(t[i])) tMap.set(t[i], tMap.get(t[i])! + 1);
    else tMap.set(t[i], 1);
  }

  for (const [k, v] of sMap.entries()) {
    const val: number | undefined = tMap.get(k);
    if (!val) return false;

    if (val !== v) return false;
  }

  return true;
}
