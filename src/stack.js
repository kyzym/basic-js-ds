const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  stackArray = [];

  push(element) {
    this.stackArray.push(element);
  }

  peek() {
    const { stackArray } = this;
    if (!stackArray.length) {
      return;
    }
    return stackArray.at(-1);
  }

  pop() {
    const { stackArray } = this;
    if (!stackArray.length) {
      return;
    }
    return stackArray.pop();
  }
}

module.exports = {
  Stack,
};
