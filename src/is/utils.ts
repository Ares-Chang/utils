import { isArray, isMap, isNumber, isObject, isSet, isString } from './types'

/**
 * 判断是否为空
 *
 * 判断区间为: null, undefined, NaN, 0, '', [], {}, new Map(), new Set()
 *
 * @param val
 * @returns 是否为空
 */
export function isEmpty<T = unknown>(val: T): val is T {
  if (val === null || val === undefined)
    return true

  if (isNumber(val)) {
    if (Number.isNaN(val))
      return true

    return val === 0
  }

  if (isArray(val) || isString(val))
    return val.length === 0

  if (isMap(val) || isSet(val))
    return val.size === 0

  if (isObject(val))
    return Object.keys(val).length === 0

  return false
}

/**
 * 判断是否为手机号
 *
 * @param val
 * @returns 是否为手机号
 * @example isMobileNum(13333333333) // => true
 */
export function isMobileNum(val: string | number): boolean {
  return /^1[3-9]\d{9}$/.test(String(val))
}

/**
 * 判断是否为车牌号
 *
 * @param val
 * @returns 是否为车牌号
 */
export function isCarNo(val: string): boolean {
  const oldPattern = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z][A-Z][A-Z0-9]{4}[A-Z0-9挂学警港澳]$/
  const newEnergyPattern = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z](?:(?:[A-Z](?![DF][0-9A-Z])[DF]|[A-Z]{2})[A-Z0-9]{5}|[A-Z0-9]{4}[DF])$/

  return oldPattern.test(val) || newEnergyPattern.test(val)
}

/**
 * 判断是否为身份证
 *
 * @param val
 * @returns 是否为身份证
 * @example isCard('110101199003070134') // => true
 */
export function isCard(val: string): boolean {
  return /^(?:[1-9]\d{7}(?:0\d|1[0-2])(?:[0|12]\d|3[01])\d{3}$|[1-9]\d{5}[1-9]\d{3}(?:0\d|1[0-2])(?:[0|12]\d|3[01])(?:\d{4}|\d{3}X)$)/i.test(String(val))
}

/**
 * 判断是否为邮箱
 *
 * @param val
 * @returns 是否为邮箱
 */
export function isEmail(val: string): boolean {
  // return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(String(val))
  return /^[\w.+-]+@[a-z0-9-]+\.[a-z0-9-.]+$/i.test(String(val))
}

/**
 * 判断是否为 url
 *
 * @param val
 * @returns 是否为 url
 */
export function isUrl(val: string): boolean {
  return /^https?:\/\/.*/.test(String(val))
}
