export default class Node<T> {
  element: T;
  prev: Node<T> | null;
  next: Node<T> | null;

  constructor(element: T, prev: Node<T> | null, next: Node<T> | null) {
    this.element = element;
    this.prev = prev;
    this.next = next;
  }
}
