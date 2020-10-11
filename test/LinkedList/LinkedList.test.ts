import LinkedList from "../../src/LinkedList/LinkedList";

let linkedList: LinkedList<number>;

beforeEach(() => {
  linkedList = new LinkedList<number>();
  for (let i = 5; i > 0; i--) {
    linkedList.addFirst(i);
  }
});

test("从头部插入元素 addFirst", () => {
  linkedList.add(0, 6);
  expect(linkedList.toString()).toBe("6,1,2,3,4,5");
  expect(linkedList.getSize()).toBe(6);
});

test("从尾部插入元素 addLast", () => {
  linkedList.addLast(1);
  linkedList.add(linkedList.getSize(), 2);
  expect(linkedList.toString()).toBe("1,2,3,4,5,1,2");
  expect(linkedList.getSize()).toBe(7);
});

test("从中间插入元素 add", () => {
  linkedList.add(2, 9);
  expect(linkedList.toString()).toBe("1,2,9,3,4,5");

  linkedList.add(4, 10);
  expect(linkedList.toString()).toBe("1,2,9,3,10,4,5");

  expect(linkedList.getSize()).toBe(7);
});

test("插入索引值超过链表元素个数的报错情况 add error", () => {
  expect(() => {
    linkedList.add(6, 2);
  }).toThrow("Add failed. Illegal index");
});

test("插入索引值小于0的报错情况 add error", () => {
  const linkedList = new LinkedList<number>();
  expect(() => {
    linkedList.add(-1, 2);
  }).toThrow("Add failed. Illegal index");
});

test("获取链表头部元素", () => {
  expect(linkedList.getFirst()).toBe(1);
  expect(linkedList.get(0)).toBe(1);

  linkedList.addFirst(10);
  expect(linkedList.getFirst()).toBe(10);
  expect(linkedList.get(0)).toBe(10);
  expect(linkedList.toString()).toBe("10,1,2,3,4,5");

  linkedList.add(0, 2);
  expect(linkedList.getFirst()).toBe(2);
  expect(linkedList.get(0)).toBe(2);
  expect(linkedList.toString()).toBe("2,10,1,2,3,4,5");
});

test("获取链表尾部元素", () => {
  function getLastIndex() {
    return linkedList.getSize() - 1;
  }
  expect(linkedList.getLast()).toBe(5);
  expect(linkedList.get(getLastIndex())).toBe(5);

  linkedList.addLast(10);
  expect(linkedList.getLast()).toBe(10);
  expect(linkedList.get(getLastIndex())).toBe(10);
  expect(linkedList.toString()).toBe("1,2,3,4,5,10");

  linkedList.add(linkedList.getSize(), 2);
  expect(linkedList.getLast()).toBe(2);
  expect(linkedList.get(getLastIndex())).toBe(2);
  expect(linkedList.toString()).toBe("1,2,3,4,5,10,2");
});

test("获取链表中间的元素", () => {
  expect(linkedList.get(1)).toBe(2);
});

test("获取超出边界的值", () => {
  expect(() => {
    linkedList.get(6);
  }).toThrowError("Illegal index");
});

test("获取空链表最后一个元素", () => {
  const linkedList = new LinkedList();

  expect(() => {
    linkedList.getLast();
  }).toThrowError("LinkedList is empty");
});

test("设置链表元素", () => {
  linkedList.set(1, 4);
  expect(linkedList.get(1)).toBe(4);
});

test("设置超出范围的元素", () => {
  expect(() => {
    linkedList.set(5, 50);
  }).toThrowError("Illegal index.");
});

test("查找元素", () => {
  expect(linkedList.contains(3)).toBeTruthy();
});

test("查找不存在的元素", () => {
  expect(linkedList.contains(10)).toBeFalsy();
});

test("删除第一个元素", () => {
  expect(linkedList.removeFirst()).toBe(1);
  expect(linkedList.getSize()).toBe(4);
});

test("删除最后一个元素", () => {
  expect(linkedList.removeLast()).toBe(5);
  expect(linkedList.getSize()).toBe(4);
});

test("删除中间元素", () => {
  expect(linkedList.remove(3)).toBe(4);
  expect(linkedList.remove(2)).toBe(3);
  expect(linkedList.getSize()).toBe(3);
});
