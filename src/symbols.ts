/**
 * Делает объект перебираемым
 * @param obj
 */
export function makeIterable(obj: any) { // TODO: Убрать any
  obj[Symbol.iterator] = function*() {
    const keys: string[] = Object.keys(this)
    let max = -1
    for (const key of keys) {
      const index = parseInt(key)
      if (index > max) {
        max = index
      }
    }

    for (let i = 0; i < max + 1; i++) {
      yield this[i]
    }
  }
}
