import { describe, expect, it } from 'vitest'
import { getTypeName, toString } from '../src/base'

describe('toString 函数测试', () => {
  it('应返回数字的正确类型', () => {
    const num = 123
    expect(toString(num)).toBe('[object Number]')
  })

  it('应返回字符串的正确类型', () => {
    const str = 'hello'
    expect(toString(str)).toBe('[object String]')
  })

  it('应返回布尔值的正确类型', () => {
    const bool = true
    expect(toString(bool)).toBe('[object Boolean]')
  })

  it('应返回数组的正确类型', () => {
    const arr = [1, 2, 3]
    expect(toString(arr)).toBe('[object Array]')
  })

  it('应返回对象的正确类型', () => {
    const obj = { key: 'value' }
    expect(toString(obj)).toBe('[object Object]')
  })

  it('应返回函数的正确类型', () => {
    const func = () => {}
    expect(toString(func)).toBe('[object Function]')
  })

  it('应返回 null 值的正确类型', () => {
    const nullValue = null
    expect(toString(nullValue)).toBe('[object Null]')
  })
})

describe('getTypeName 函数测试', () => {
  it('应返回数字的正确类型', () => {
    const num = 123
    expect(getTypeName(num)).toBe('number')
  })

  it('应返回字符串的正确类型', () => {
    const str = 'hello'
    expect(getTypeName(str)).toBe('string')
  })

  it('应返回布尔值的正确类型', () => {
    const bool = true
    expect(getTypeName(bool)).toBe('boolean')
  })

  it('应返回数组的正确类型', () => {
    const arr = [1, 2, 3]
    expect(getTypeName(arr)).toBe('array')
  })

  it('应返回对象的正确类型', () => {
    const obj = { key: 'value' }
    expect(getTypeName(obj)).toBe('object')
  })

  it('应返回函数的正确类型', () => {
    const func = () => {}
    expect(getTypeName(func)).toBe('function')
  })

  it('应返回 null 值的正确类型', () => {
    const nullValue = null
    expect(getTypeName(nullValue)).toBe('null')
  })
})
