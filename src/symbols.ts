import { NextValue } from "./types/NextValue"

export function makeIterable(obj: any) {
  obj[Symbol.iterator] = function () {
    const keys: string[] = Object.keys(this)
    let max = -1
    for (const key of keys) {
      const index = parseInt(key)
      if (index > max) {
        max = index
      }
    }

    let i = 0
    const size = max + 1

    return {
      next: (): NextValue => {
        return i === size ? { done: true } : {
          value: this[i++],
          done: false,
        }
      }
    }
  }
}
