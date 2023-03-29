import { has } from '../src/has'

const example = {
  a: {
    str: 'string',
    numb: 1,
    nul: null,
    arr1: [undefined, false, null],
    arr2: [
      [false, [ { x: 1 } ]],
    ],
  },
  b: {
    c: {
      d: {
        und: undefined,
        func: () => undefined,
        nan: NaN,
        e: {
          nul: null,
        },
      },
    },
  },
  hasOwnProperty() {
    return true
  },
}

test('has', () => {
  expect(has(example, 'a')).toStrictEqual(true)
  expect(has(example, 'a.nul')).toStrictEqual(true)
  expect(has(example, 'notexisting')).toStrictEqual(false)
  expect(has(example, 'b')).toStrictEqual(true)
  expect(has(example, 'c')).toStrictEqual(false)
  expect(has(example, 'a.str')).toStrictEqual(true)
  expect(has(example, 'd.f.h.t.y.a')).toStrictEqual(false)
  expect(has(example, 'b')).toStrictEqual(true)
  expect(has(example, 'b.c')).toStrictEqual(true)
  expect(has(example, 'b.d')).toStrictEqual(false)
  expect(has(example, 'b.c.d.X')).toStrictEqual(false)
  expect(has(example, 'b.c.d.und')).toStrictEqual(true)
  expect(has(example, 'b.c.d.func')).toStrictEqual(true)
  expect(has(example, 'b.c.d.nan')).toStrictEqual(true)
  expect(has(example, 'b.c.d.e')).toStrictEqual(true)
  expect(has(example, 'b.c.d.e.nul')).toStrictEqual(true)
  expect(has(example, 'b.c.d.e.nul1')).toStrictEqual(false)
  expect(has(example, 'a.arr1')).toStrictEqual(true)

  /* arrays */
  expect(has(example, 'a.arr1[0]')).toStrictEqual(true)
  expect(has(example, 'a.arr1[1]')).toStrictEqual(true)
  expect(has(example, 'a.arr1[2]')).toStrictEqual(true)
  expect(has(example, 'a.arr1[3]')).toStrictEqual(false)
  expect(has(example, 'a.arr2[0]')).toStrictEqual(true)
  expect(has(example, 'a.arr2[1]')).toStrictEqual(false)
  expect(has(example, 'a.arr2[1][0]')).toStrictEqual(false)
  expect(has(example, 'a.arr2[0][0]')).toStrictEqual(true)
  expect(has(example, 'a.arr2[0][1]')).toStrictEqual(true)
  expect(has(example, 'a.arr2[0][1][0].x')).toStrictEqual(true)
  expect(has(example, 'a.arr2[0][1][0].y')).toStrictEqual(false)
  /* end arrays */
})
