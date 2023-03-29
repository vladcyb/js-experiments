import { makeIterable } from '../src/symbols'

const arr = [
  {
    name: 'A',
    a: {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
    },
    b: ['January', 'February', 'March', 'April'],
  },
  {
    name: 'B',
    a: {
      0: 'January',
      foo: 'bar',
      1: 'February',
      3: 'March',
      2: 'April',
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      test() {},
    },
    b: ['January', 'February', 'April', 'March'],
  },
  {
    name: 'C',
    a: {},
    b: [],
  },
  {
    name: 'D',
    a: { a: 1 },
    b: [],
  },
  {
    name: 'E',
    a: {
      1: 'January',
      2: 'February',
      4: 'March',
      5: 'April',
    },
    b: [undefined, 'January', 'February', undefined, 'March', 'April'],
  },
  {
    name: 'F',
    a: {
      0: 123,
      length: 10,
    },
    b: [123],
  },
]

arr.forEach(item => {
  test(`makeIterable ${item.name}`, () => {
    makeIterable(item.a)

    expect([...item.a as any]).toStrictEqual(item.b)

    const itemCopy: any[] = []
    for (const x of item.a as any) {
      itemCopy.push(x)
    }

    expect(itemCopy).toStrictEqual(item.b)
    expect(Array.from(item.a as any)).toStrictEqual(item.b)
  })
})
