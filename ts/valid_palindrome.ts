function isPalindrome(s: string): boolean {
  const filteredText: string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (let i = 1; i <= filteredText.length / 2; i++) {
    if (!(filteredText[i - 1] === filteredText[filteredText.length - i])) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("ab_a"));
