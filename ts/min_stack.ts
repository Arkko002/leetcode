// 73ms 98%, 60.24MB 24.43%
class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  constructor() {
  }

  push(val: number): void {
    this.stack.push(val);
    if (
      this.minStack.length === 0 ||
      this.minStack[this.minStack.length - 1] >= val
    ) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
