/**
 * Функция проверки существования вложенного свойства в объекте или массиве
 * @param obj
 * @param path
 * @returns true, если существует, false в противном случае
 */
export function has (obj: unknown, path: string) {
  const keys = path.replace(/\]$/, '').split(/\.|\[|\]\.|\]\[|\]/)
  let currentObj: unknown = obj

  for(const key of keys) {
    if (currentObj == null || !Object.hasOwn(currentObj, key)) {
      return false
    }
    currentObj = (currentObj as Record<string, unknown>)[key]
  }

  return true
}
