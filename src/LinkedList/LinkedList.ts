// 最基础的链表
import _ from "lodash";

import Node from "./Node";

interface LinkedListInferface<T> {
  /** 向链表某个索引位置添加元素, O(n) */
  add: (index: number, element: T) => void;
  /** 向链表开头插入一个元素, O(1) */
  addFirst: (element: T) => void;
  /** 向链表尾部添加一个新元素，O(n) */
  addLast: (element: T) => void;

  /** 根据索引获取链表元素, O(n) */
  get: (index: number) => T;
  /** 获取链表第一个元素, O(1) */
  getFirst: () => T;
  /** 获取链表最后一个元素, O(n) */
  getLast: () => T;

  /** 从链表中移除一个元素，返回删除的元素。O(n)（在链表中不是一个常用的操作，练习用） */
  remove: (index: number) => T;
  /** 从链表中删除第一个元素, O(1) */
  removeFirst: () => T;
  /** 从链表中删除最后一个元素, O(n) */
  removeLast: () => T;

  /** 修改链表索引为 index 的元素, O(n)（不是常用操作，练习用） */
  set: (index: number, element: T) => void;
  /** 查找链表中是否有元素 e, O(n) */
  contains(element: T): boolean;
  /** 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false */
  isEmpty: () => void;
  /** 返回链表包含的元素个数，与数组的length属性类似 */
  getSize: () => number;
  /** 返回表示整个链表的字符串。由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值 */
  toString: () => string;
}

export default class LinkedList<T> implements LinkedListInferface<T> {
  private size = 0;
  private dummyHead = new Node<T>(null);

  add(index: number, element: T): void {
    if (index < 0 || index > this.size) {
      throw new Error("Add failed. Illegal index");
    }

    let prev = this.dummyHead;
    // 找到 index - 1 的元素
    for (let i = 0; i < index; i++) {
      prev = prev.next as Node<T>;
    }

    prev.next = new Node<T>(element, prev.next);

    this.size++;
  }

  addFirst(element: T): void {
    this.add(0, element);
  }

  addLast(element: T): void {
    this.add(this.size, element);
  }

  get(index: number): T {
    if (index < 0 || index >= this.size) {
      throw new Error("Illegal index");
    }

    let current = this.dummyHead.next as Node<T>;
    for (let i = 0; i < index; i++) {
      current = current.next as Node<T>;
    }

    return current.element as T;
  }

  getFirst(): T {
    return this.get(0);
  }

  getLast(): T {
    return this.get(this.size - 1);
  }

  set(index: number, element: T): void {
    if (index < 0 || index >= this.size) {
      throw new Error("Illegal index.");
    }

    let current = this.dummyHead.next as Node<T>;

    for (let i = 0; i < index; i++) {
      current = current.next as Node<T>;
    }

    current.element = element;
  }

  contains(element: T): boolean {
    let cur = this.dummyHead.next;

    while (cur != null) {
      if (_.isEqual(cur.element, element)) {
        return true;
      }
      cur = cur.next;
    }

    return false;
  }

  toString(): string {
    let str = "";
    let cur = this.dummyHead.next;

    while (cur != null) {
      str += cur.element + "->";
      cur = cur.next;
    }
    str += "null";

    return str;
  }

  getSize(): number {
    return this.size;
  }

  remove(index: number): T {
    if (index < 0 || index >= this.size) {
      throw new Error("Index is illegal");
    }

    // 找出被删除元素的前一个元素
    let prevNode = this.dummyHead;
    for (let i = 0; i < index; i++) {
      prevNode = prevNode.next as Node<T>;
    }

    const delNode = prevNode.next as Node<T>;
    prevNode.next = delNode.next;
    delNode.next = null;

    this.size--;

    return delNode.element as T;
  }

  removeFirst(): T {
    return this.remove(0);
  }

  removeLast(): T {
    return this.remove(this.size - 1);
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}
