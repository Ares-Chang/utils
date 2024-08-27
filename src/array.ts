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
