interface ArrayQueueInterface<T> {
  enqueue: (element: T) => void;
  dequeue: () => T | undefined;
  getFront: () => T | undefined;
  getSize: () => number;
  isEmpty: () => boolean;
}

export default class ArrayQueue<T> implements ArrayQueueInterface<T> {
  private queue: T[] = [];

  getSize(): number {
    return this.queue.length;
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  enqueue(element: T): void {
    this.queue.push(element);
  }

  dequeue(): T | undefined {
    return this.queue.shift();
  }

  getFront(): T | undefined {
    return this.queue[0];
  }
}
