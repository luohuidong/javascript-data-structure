export default class DoublyLinkedListNode<T> {
  element: T;
  prev: DoublyLinkedListNode<T> | null;
  next: DoublyLinkedListNode<T> | null;

  constructor(element: T, prev: DoublyLinkedListNode<T> | null, next: DoublyLinkedListNode<T> | null) {
    this.element = element;
    this.prev = prev;
    this.next = next;
  }
}
