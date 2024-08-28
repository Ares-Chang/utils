import { describe, expect, it } from 'vitest'
import {
  is,
  isArray,
  isArrayBuffer,
  isBoolean,
  isBrowser,
  isDate,
  isDef,
  isEmpty,
  isFile,
  isFormData,
  isFunction,
  isMap,
  isNull,
  isNumber,
  isObject,
  isPromise,
  isRegExp,
  isSet,
  isString,
  isUndefined,
  isWindow,
} from '../src/is'

describe('is 函数测试', () => {
  it('is 函数应正确判断类型', () => {
    expect(is(1, 'Number')).toBe(true)
    expect(is(null, 'Null')).toBe(true)
    expect(is(1, 'String')).toBe(false)
  })

  it('isDef 函数应正确判断有值和无值的情况', () => {
    expect(isDef(1)).toBe(true)
    expect(isDef(undefined)).toBe(false)
  })

  it('isBoolean 函数应正确判断布尔值', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(1)).toBe(false)
  })

  it('isFunction 函数应正确判断函数', () => {
    const func = () => {}
    expect(isFunction(func)).toBe(true)
    expect(isFunction(1)).toBe(false)
  })

  it('isNumber 函数应正确判断数字', () => {
    expect(isNumber(1)).toBe(true)
    expect(isNumber('1')).toBe(false)
  })

  it('isString 函数应正确判断字符串', () => {
    expect(isString('1')).toBe(true)
    expect(isString(1)).toBe(false)
  })

  it('isArray 函数应正确判断数组类型', () => {
    const arr = [1, 2, 3]
    expect(isArray(arr)).toBe(true)
    const notArr = 123
    expect(isArray(notArr)).toBe(false)
  })

  it('isObject 函数应正确判断对象', () => {
    expect(isObject({})).toBe(true)
    expect(isObject(1)).toBe(false)
  })

  it('isUndefined 函数应正确判断 undefined', () => {
    expect(isUndefined(undefined)).toBe(true)
    expect(isUndefined(1)).toBe(false)
  })

  it('isNull 函数应正确判断 null', () => {
    expect(isNull(null)).toBe(true)
    expect(isNull(1)).toBe(false)
  })

  it('isRegExp 函数应正确判断正则表达式', () => {
    const reg = /./
    expect(isRegExp(reg)).toBe(true)
    expect(isRegExp(1)).toBe(false)
  })

  it('isDate 函数应正确判断日期', () => {
    const date = new Date()
    expect(isDate(date)).toBe(true)
    expect(isDate(1)).toBe(false)
  })

  it('isWindow 函数应正确判断 window 对象', () => {
    expect(isWindow({})).toBe(false)
  })

  it('isBrowser 函数应正确判断浏览器环境', () => {
    expect(isBrowser).toBe(false)
  })

  it('isBlob 函数应正确判断 FormData 类型', () => {
    const formData = new FormData()
    expect(isFormData(formData)).toBe(true)
    const notFormData = {}
    expect(isFormData(notFormData)).toBe(false)
  })

  it('isFile 函数应正确判断 File 类型', () => {
    const file = new File([], 'test.txt')
    expect(isFile(file)).toBe(true)
    const notFile = {}
    expect(isFile(notFile)).toBe(false)
  })

  it('isArrayBuffer 函数应正确判断 ArrayBuffer 类型', () => {
    const buffer = new ArrayBuffer(10)
    expect(isArrayBuffer(buffer)).toBe(true)
    const notBuffer = 123
    expect(isArrayBuffer(notBuffer)).toBe(false)
  })

  it('isMap 函数应正确判断 Map 类型', () => {
    const map = new Map()
    expect(isMap(map)).toBe(true)
    const notMap = 123
    expect(isMap(notMap)).toBe(false)
  })

  it('isSet 函数应正确判断 Set 类型', () => {
    const set = new Set()
    expect(isSet(set)).toBe(true)
    const notSet = 123
    expect(isSet(notSet)).toBe(false)
  })

  it('isPromise 函数应正确判断 Promise 类型', () => {
    const promise = new Promise(() => {})
    expect(isPromise(promise)).toBe(true)
    const notPromise = 123
    expect(isPromise(notPromise)).toBe(false)
  })

  it('isEmpty 函数应正确判断空值', () => {
    expect(isEmpty({})).toBe(true)
    expect(isEmpty(123)).toBe(false)
    expect(isEmpty([1, 2, 3])).toBe(false)
    expect(isEmpty('')).toBe(true)
    expect(isEmpty(null)).toBe(false)
  })
})
