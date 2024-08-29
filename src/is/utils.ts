import { isArray, isMap, isObject, isSet, isString } from './types'

/**
 * 判断是否为空
 * @param val
 * @returns 是否为空
 */
export function isEmpty<T = unknown>(val: T): val is T {
  if (isArray(val) || isString(val))
    return val.length === 0

  if (isMap(val) || isSet(val))
    return val.size === 0

  if (isObject(val))
    return Object.keys(val).length === 0

  return false
}
