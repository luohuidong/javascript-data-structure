import LinkedList from "../../src/LinkedList/LinkedList";

test("LinkedList add", () => {
  const linkedList = new LinkedList<number>();
  for (let i = 0; i < 5; i++) {
    linkedList.addFirst(i);
  }
  expect(linkedList.getSize()).toBe(5);
});

test("LinkedList get", () => {
  const linkedList = new LinkedList<number>();
  linkedList.addFirst(0);
  expect(linkedList.get(0)).toBe(0);
  linkedList.addFirst(1);
  expect(linkedList.get(0)).toBe(1);
});
