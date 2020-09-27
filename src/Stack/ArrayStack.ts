interface ArrayStackInterface<T> {
  push: (element: T) => void;
  pop: () => T | undefined;
  peek: () => T | undefined;
  getSize: () => number;
  isEmpty: () => boolean;
}

export default class ArrayStack<T> implements ArrayStackInterface<T> {
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
