import type { Fn } from './types'
import { toString } from './base'

export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isFunction = <T extends Fn> (val: any): val is T => typeof val === 'function'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isArray = (val: any): val is any[] => toString(val) === '[object Array]'
export const isObject = (val: any): val is object => toString(val) === '[object Object]'
export const isUndefined = (val: any): val is undefined => toString(val) === '[object Undefined]'
export const isNull = (val: any): val is null => toString(val) === '[object Null]'
export const isRegExp = (val: any): val is RegExp => toString(val) === '[object RegExp]'
export const isDate = (val: any): val is Date => toString(val) === '[object Date]'
export const isFormData = (val: any): val is FormData => toString(val) === '[object FormData]'
export const isBlob = (val: any): val is Blob => toString(val) === '[object Blob]'
export const isFile = (val: any): val is File => toString(val) === '[object File]'
export const isArrayBuffer = (val: any): val is ArrayBuffer => toString(val) === '[object ArrayBuffer]'

// @ts-expect-error 检测 window
export const isWindow = (val: any): boolean => typeof window !== 'undefined' && toString(val) === '[object Window]'
// @ts-expect-error 检测 window
export const isBrowser = typeof window !== 'undefined'
