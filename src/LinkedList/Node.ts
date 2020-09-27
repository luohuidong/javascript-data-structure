export default class Node<T> {
  element: T | null = null;
  next: Node<T> | null = null;

  constructor(element: T | null, next: Node<T> | null = null) {
    this.element = element;
    this.next = next;
  }
}
