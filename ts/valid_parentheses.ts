function isValid(s: string): boolean {
  const chars = [...s];
  const stack: string[] = [];

  let result = true;
  chars.forEach((char: string, index: number) => {
    console.log(
      `char: ${char}, index: ${index}, stack: ${JSON.stringify(stack)}`,
    );
    switch (char) {
      case "[":
      case "{":
      case "(":
        stack.push(char);
        break;

      case "]":
      case "}":
      case ")":
        if (!isValidOpeningParentheses(stack.pop()!, char)) {
          result = false;
        }
        break;
    }
  });

  return result && stack.length === 0;
}

const isValidOpeningParentheses = (
  opening: string,
  closing: string,
): boolean => {
  console.log(`opening: ${opening}, closing: ${closing}`);
  return (
    (opening === "[" && closing === "]") ||
    (opening === "{" && closing === "}") ||
    (opening === "(" && closing === ")")
  );
};

console.log(isValid("(("));
