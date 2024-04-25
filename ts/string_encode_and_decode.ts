class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    if (strs.length === 0) return "";
    return strs.join("#!#");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    return str.split("#!#");
  }
}
