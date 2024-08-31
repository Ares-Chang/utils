import type { Fn } from '../types'
import { toString } from '../base'

/**
 * 判断值的类型
 * @param val 值
 * @param type 类型
 * @returns 是否类型相等
 * @example is(new Date(), 'Date') // => true
 */
export const is = <T = any>(val: T, type: string): boolean => toString(val) === `[object ${type}]`

export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isFunction = <T extends Fn> (val: any): val is T => typeof val === 'function'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isArray = (val: any): val is any[] => is(val, 'Array')
export const isObject = (val: any): val is object => is(val, 'Object')
export const isUndefined = (val: any): val is undefined => is(val, 'Undefined')
export const isNull = (val: any): val is null => is(val, 'Null')

/**
 * 判断是否为 window
 *
 * @param val
 * @returns 是否为 window
 */
export function isWindow(val: any): boolean {
  return typeof window !== 'undefined' && is(val, 'Window')
}

export const isRegExp = (val: any): val is RegExp => is(val, 'RegExp')
export const isDate = (val: any): val is Date => is(val, 'Date')
export const isFormData = (val: any): val is FormData => is(val, 'FormData')
export const isBlob = (val: any): val is Blob => is(val, 'Blob')
export const isFile = (val: any): val is File => is(val, 'File')
export const isArrayBuffer = (val: any): val is ArrayBuffer => is(val, 'ArrayBuffer')
export const isMap = (val: any): val is Map<any, any> => is(val, 'Map')
export const isSet = (val: any): val is Set<any> => is(val, 'Set')
export const isPromise = <T = any>(val: unknown): val is Promise<T> => is(val, 'Promise')
