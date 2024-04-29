// RES: 56ms 91.45%, 52.48MB 87.55%
function evalRPN(tokens: string[]): number {
  const stack: string[] = [];
  tokens.forEach((token: string) => {
    if (token === "*" || token === "/" || token === "-" || token === "+") {
      const secondOperand: number = Number.parseInt(stack.pop()!);
      const firstOperand: number = Number.parseInt(stack.pop()!);
      if (token === "*") {
        stack.push(`${firstOperand * secondOperand}`);
      } else if (token === "-") {
        stack.push(`${firstOperand - secondOperand}`);
      } else if (token === "+") {
        stack.push(`${firstOperand + secondOperand}`);
      } else if (token === "/") {
        stack.push(`${firstOperand / secondOperand}`);
      }
    } else {
      stack.push(token);
    }
  });

  return Number.parseInt(stack.pop()!);
}

console.log(evalRPN(["2", "1", "+", "3", "*"]));
