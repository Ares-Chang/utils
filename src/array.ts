import type { Arrayable, Nullable } from './types'

/**
 * 将 `Arrayable<T>` 转换成 `Array<T>`
 *
 * @category Array
 */
export function toArray<T>(array?: Nullable<Arrayable<T>>): Array<T> {
  array = array ?? []
  return Array.isArray(array) ? array : [array]
}

/**
 * 将 `Arrayable<T>` 转换成 `Array<T>` 并拉平数组
 *
 * @category Array
 * @example flattenArrayable([1, [2, 3]]) // => [1, 2, 3]
 */
export function flattenArrayable<T>(array?: Nullable<Arrayable<T | Array<T>>>): Array<T> {
  return toArray(array).flat(1) as Array<T>
}

/**
 * 合并数组并且拉平一层数组
 *
 * @category Array
 * @example mergeArrayable(1, [2, 3]) // => [1, 2, 3]
 */
export function mergeArrayable<T>(...args: Nullable<Arrayable<T>>[]): Array<T> {
  return args.flatMap(i => toArray(i))
}

/**
 * 数组唯一化
 *
 * @category Array
 * @example uniq([1, 2, 3, 1, 2, 3]) // => [1, 2, 3]
 */
export function uniq<T>(array: readonly T[]): T[] {
  return Array.from(new Set(array))
}

/**
 * 通过自定义函数唯一化数组
 *
 * @category Array
 * @example uniqueBy([1, 2, 3, 1, 2, 3], (a, b) => a === b) // => [1, 2, 3]
 */
export function uniqueBy<T>(array: readonly T[], equalFn: (a: any, b: any) => boolean): T[] {
  return array.reduce((acc: T[], cur: any) => {
    const index = acc.findIndex((item: any) => equalFn(cur, item))
    if (index === -1)
      acc.push(cur)
    return acc
  }, [])
}

/**
 * 获取数组最后一项
 *
 * @category Array
 * @example last([1, 2, 3]) // => 3
 */
export function last(array: readonly []): undefined
export function last<T>(array: readonly T[]): T
export function last<T>(array: readonly T[]): T | undefined {
  return at(array, -1)
}

/**
 * 删除数组中的某一项
 *
 * @category Array
 * @example remove([1, 2, 3], 2) // => [1, 3]
 */
export function remove<T>(array: T[], value: T): boolean {
  if (!array)
    return false
  const index = array.indexOf(value)
  if (index >= 0) {
    array.splice(index, 1)
    return true
  }
  return false
}

/**
 * 获取数组中的某一项
 *
 * @category Array
 * @example
 * at([1, 2, 3], 1) // => 2
 * at([1, 2, 3], -1) // => 3
 */
export function at(array: readonly [], index: number): undefined
export function at<T>(array: readonly T[], index: number): T
export function at<T>(array: readonly T[] | [], index: number): T | undefined {
  const len = array.length
  if (!len)
    return undefined

  if (index < 0)
    index += len

  return array[index]
}

/**
 * 生成一个指定范围的数组
 *
 * @category Array
 * @example
 * range(10) // => [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * range(1, 10, 2) // => [1, 3, 5, 7, 9]
 */
export function range(stop: number): number[]
export function range(start: number, stop: number, step?: number): number[]
export function range(...args: any): number[] {
  let start: number, stop: number, step: number

  if (args.length === 1) {
    start = 0
    step = 1;
    ([stop] = args)
  }
  else {
    ([start, stop, step = 1] = args)
  }

  const arr: number[] = []
  let current = start
  while (current < stop) {
    arr.push(current)
    current += step || 1
  }

  return arr
}

/**
 * 移动数组中的元素
 *
 * @category Array
 * @param arr
 * @param from
 * @param to
 * @example move([1, 2, 3], 1, 0) // => [2, 1, 3]
 */
export function move<T>(arr: T[], from: number, to: number): T[] {
  arr.splice(to, 0, arr.splice(from, 1)[0])
  return arr
}
