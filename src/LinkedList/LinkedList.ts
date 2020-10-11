// 最基础的链表
import _ from "lodash";

import Node from "./Node";
import type { LinkedListInferface } from "./types";

export default class LinkedList<T> implements LinkedListInferface<T> {
  /** 链表节点个数 */
  private size = 0;
  /** 链表头节点 */
  private head: Node<T> | null = null;
  /** 链表尾节点 */
  private tail: Node<T> | null = null;

  /**
   * 向链表某个索引位置添加新节点, O(n)
   * @param index
   * @param element
   */
  add(index: number, element: T): void {
    if (index < 0 || index > this.size) {
      throw new Error("Add failed. Illegal index");
    }

    if (index === 0) {
      if (this.size === 0) {
        const newNode = new Node<T>(element, null, null);

        this.head = newNode;
        this.tail = newNode;
      } else {
        const head = this.head as Node<T>;
        const newNode = new Node<T>(element, head.prev, head);
        head.prev = newNode;

        this.head = newNode;
      }
    } else if (index === this.size) {
      const tail = this.tail as Node<T>;
      const newNode = new Node<T>(element, tail, tail.next);
      tail.next = newNode;

      this.tail = newNode;
    } else {
      let prevNode: Node<T> = this.head as Node<T>;
      for (let i = 1; i < index; i++) {
        prevNode = prevNode.next as Node<T>;
      }
      const newNode = new Node<T>(element, prevNode, prevNode.next);
      prevNode.next = newNode;
    }

    this.size++;
  }

  /**
   * 向链表头部添加新的节点，O(1)
   * @param element
   */
  addFirst(element: T): void {
    this.add(0, element);
  }

  /**
   * 向链表尾部添加新的节点，O(1)
   * @param element
   */
  addLast(element: T): void {
    this.add(this.size, element);
  }

  /**
   * 获取某个索引位置的节点的值
   * @param index
   */
  get(index: number): T {
    if (this.size === 0) {
      throw new Error("LinkedList is empty");
    }

    if (index < 0 || index >= this.size) {
      throw new Error("Illegal index");
    }

    let current: Node<T> = this.head as Node<T>;

    if (index === 0) {
      current = this.head as Node<T>;
    } else if (index === this.size - 1) {
      current = this.tail as Node<T>;
    } else {
      for (let i = 0; i < index; i++) {
        current = current.next as Node<T>;
      }
    }

    return current.element as T;
  }

  /** 获取第一个节点的值，O(1) */
  getFirst(): T {
    return this.get(0);
  }

  /** 获取最后一个节点的值，O(1) */
  getLast(): T {
    return this.get(this.size - 1);
  }

  /**
   * 设置某个索引的节点的值，O(n)
   * @param index
   * @param element
   */
  set(index: number, element: T): void {
    if (index < 0 || index >= this.size) {
      throw new Error("Illegal index.");
    }

    let current = this.head as Node<T>;

    for (let i = 0; i < index; i++) {
      current = current.next as Node<T>;
    }

    current.element = element;
  }

  /**
   * 查看链表中，是否有对应某个值的节点，O(n)
   * @param element
   */
  contains(element: T): boolean {
    let cur = this.head;

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
    let cur = this.head;

    while (cur != null) {
      str += cur.next ? cur.element + "," : cur.element;
      cur = cur.next;
    }

    return str;
  }

  /** 获取链表节点个数 */
  getSize(): number {
    return this.size;
  }

  /**
   * 删除某个索引位置的节点
   * @param index
   */
  remove(index: number): T {
    if (index < 0 || index >= this.size) {
      throw new Error("Index is illegal");
    }

    let delNode: Node<T>;

    if (this.size === 1) {
      delNode = this.head as Node<T>;
      delNode.prev = null;
      delNode.next = null;

      // 如果链表只有一个节点，那么删除节点之后应该清空 head 和 tail
      this.head = null;
      this.tail = null;
    } else {
      if (index === 0) {
        delNode = this.head as Node<T>;
        this.head = delNode.next;
        delNode.next = null;
      } else if (index === this.size - 1) {
        delNode = this.tail as Node<T>;
        this.tail = delNode.next;
        delNode.prev = null;
      } else {
        delNode = this.head as Node<T>;
        for (let i = 0; i < index; i++) {
          delNode = delNode.next as Node<T>;
        }

        (delNode.next as Node<T>).prev = delNode.prev;
        (delNode.prev as Node<T>).next = delNode.next;
        delNode.prev = null;
        delNode.next = null;
      }
    }

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
