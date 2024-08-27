import { describe, expect, it } from 'vitest'
import { toArray } from '../src/array'

describe('toArray 函数测试', () => {
  it('应将 null 转换为空数组', () => {
    expect(toArray(null)).toEqual([])
  })

  it('应将 undefined 转换为空数组', () => {
    expect(toArray(undefined)).toEqual([])
  })

  it('应将单个元素转换为包含该元素的数组', () => {
    expect(toArray(1)).toEqual([1])
    expect(toArray('a')).toEqual(['a'])
    expect(toArray({ key: 'value' })).toEqual([{ key: 'value' }])
  })

  it('应保持数组不变', () => {
    expect(toArray([1, 2, 3])).toEqual([1, 2, 3])
    expect(toArray(['a', 'b', 'c'])).toEqual(['a', 'b', 'c'])
    expect(toArray([{ key: 'value1' }, { key: 'value2' }])).toEqual([{ key: 'value1' }, { key: 'value2' }])
  })
})
