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
  expect(has(example, 'a')).toBe(true)
  expect(has(example, 'a.nul')).toBe(true)
  expect(has(example, 'notexisting')).toBe(false)
  expect(has(example, 'b')).toBe(true)
  expect(has(example, 'c')).toBe(false)
  expect(has(example, 'a.str')).toBe(true)
  expect(has(example, 'd.f.h.t.y.a')).toBe(false)
  expect(has(example, 'b')).toBe(true)
  expect(has(example, 'b.c')).toBe(true)
  expect(has(example, 'b.d')).toBe(false)
  expect(has(example, 'b.c.d.X')).toBe(false)
  expect(has(example, 'b.c.d.und')).toBe(true)
  expect(has(example, 'b.c.d.func')).toBe(true)
  expect(has(example, 'b.c.d.nan')).toBe(true)
  expect(has(example, 'b.c.d.e')).toBe(true)
  expect(has(example, 'b.c.d.e.nul')).toBe(true)
  expect(has(example, 'b.c.d.e.nul1')).toBe(false)
  expect(has(example, 'a.arr1')).toBe(true)

  /* arrays */
  expect(has(example, 'a.arr1[0]')).toBe(true)
  expect(has(example, 'a.arr1[1]')).toBe(true)
  expect(has(example, 'a.arr1[2]')).toBe(true)
  expect(has(example, 'a.arr1[3]')).toBe(false)
  expect(has(example, 'a.arr2[0]')).toBe(true)
  expect(has(example, 'a.arr2[1]')).toBe(false)
  expect(has(example, 'a.arr2[1][0]')).toBe(false)
  expect(has(example, 'a.arr2[0][0]')).toBe(true)
  expect(has(example, 'a.arr2[0][1]')).toBe(true)
  expect(has(example, 'a.arr2[0][1][0].x')).toBe(true)
  expect(has(example, 'a.arr2[0][1][0].y')).toBe(false)
  /* end arrays */
})
