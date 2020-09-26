// 最基础的链表

import Node from "./Node";

interface LinkedListInferface<T> {
  /** 元素个数 */
  count: number;
  /** 链表头部 */
  head: Node<T> | undefined;
  /** 向链表尾部添加一个新元素，O(n) */
  push: (element: T) => void;
  /** 向链表的特定位置插入一个新元素 */
  insert: (element: T, position: number) => void;
  /** 返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回undefined */
  getElementAt: (index: number) => void;
  /** 从链表中移除一个元素 */
  remove: (element: T) => void;
  /** 从链表的特定位置移除一个元素 */
  removeAt: (position: number) => T | undefined;
  /** 返回元素在链表中的索引。如果链表中没有该元素则返回-1 */
  indexOf: (element: T) => number;
  /** 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false */
  isEmpty: () => void;
  /** 返回链表包含的元素个数，与数组的length属性类似 */
  size: () => number;
  /** 返回表示整个链表的字符串。由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值 */
  toString: () => string;
}

export default class LinkedList<T> implements LinkedListInferface<T> {
  count: number;
  head: Node<T> | undefined;

  constructor() {
    this.count = 0;
    this.head = undefined;
  }

  push(element: T): void {
    const node = new Node(element);

    if (this.head == null) {
      // 如果 head 为空，则直接将 node 赋值给 head
      this.head = node;
    } else {
      let current = this.head;

      while (current.next != null) {
        current = current.next;
      }
      // 将其next赋为新元素，建立链接
      current.next = node;
    }

    this.count++;
  }

  removeAt(index: number): T | undefined {
    // 检查越界值
    if (index < 0 || index >= this.count) {
      return undefined;
    }

    let current = this.head;
    if (!current) {
      return undefined;
    }

    if (index === 0) {
      this.head = current.next;
    } else {
      let previous: Node<T> = current;

      // 找到第 i 个元素的前一个元素与后一个元素
      for (let i = 1; i < index; i++) {
        if (!current) {
          return undefined;
        }
        // 前一个元素
        previous = current;
        current = current?.next;
      }

      previous.next = current?.next;
    }

    this.count--;

    return current?.element;
  }
}
