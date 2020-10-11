import type { StackInterface } from "./types";

export default class ArrayStack<T> implements StackInterface<T> {
  private stack: T[] = [];

  push(element: T): void {
    this.stack.push(element);
  }

  pop(): T | undefined {
    return this.stack.pop();
  }

  peek(): T | undefined {
    return this.stack[this.stack.length - 1];
  }

  getSize(): number {
    return this.stack.length;
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}
