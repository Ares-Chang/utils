import { describe, expect, it } from 'vitest'
import { at, flattenArrayable, last, mergeArrayable, move, range, remove, toArray, uniq, uniqueBy } from '../src/array'

describe('toArray 函数', () => {
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

describe('flattenArrayable 函数', () => {
  it('应该将嵌套数组拉平为一维数组', () => {
    expect(flattenArrayable([1, [2, 3]])).toEqual([1, 2, 3])
  })
})

describe('mergeArrayable 函数', () => {
  it('应该合并多个数组并拉平一层', () => {
    expect(mergeArrayable(1, [2, 3])).toEqual([1, 2, 3])
    expect(mergeArrayable([1], [2], [3])).toEqual([1, 2, 3])
  })
})

describe('uniq 函数', () => {
  it('应该返回数组中的唯一元素', () => {
    expect(uniq([1, 2, 3, 1, 2, 3])).toEqual([1, 2, 3])
  })
})

describe('uniqueBy 函数', () => {
  it('应该根据自定义函数返回唯一元素', () => {
    expect(uniqueBy([1, 2, 3, 1, 2, 3], (a, b) => a === b)).toEqual([1, 2, 3])
  })
})

describe('last 函数', () => {
  it('应该返回非空数组的最后一个元素，空数组返回 undefined', () => {
    expect(last([1, 2, 3])).toEqual(3)
    expect(last([])).toEqual(undefined)
  })
})

describe('remove 函数', () => {
  it('应该从数组中移除指定元素，成功移除返回 true，否则返回 false', () => {
    const arr = [1, 2, 3]
    expect(remove(arr, 2)).toBe(true)
    expect(arr).toEqual([1, 3])
    expect(remove([], 1)).toBe(false)
  })
})

describe('at 函数', () => {
  it('应该根据索引返回数组中的元素，正索引和负索引都应正确处理，空数组返回 undefined', () => {
    expect(at([1, 2, 3], 1)).toEqual(2)
    expect(at([1, 2, 3], -1)).toEqual(3)
    expect(at([], 0)).toEqual(undefined)
  })
})

describe('range 函数', () => {
  it('传入一个参数时，应该生成从 0 到指定值减一的数组', () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4])
  })

  it('传入两个参数时，应该生成从起始值到结束值减一的数组', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4])
  })

  it('传入三个参数时，应该生成指定步长的数组', () => {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9])
  })
})

describe('move 函数', () => {
  it('应该移动数组中的元素', () => {
    expect(move([1, 2, 3], 1, 0)).toEqual([2, 1, 3])
    expect(move([1, 2, 3], 0, 2)).toEqual([2, 3, 1])
  })
})
