import { describe, expect, it } from 'vitest'
import { isEmpty } from '../../src/is/utils'

describe('is 工具函数测试', () => {
  it('isEmpty 函数应正确判断空值', () => {
    expect(isEmpty({})).toBe(true)
    expect(isEmpty(123)).toBe(false)
    expect(isEmpty([1, 2, 3])).toBe(false)
    expect(isEmpty('')).toBe(true)
    expect(isEmpty(null)).toBe(false)
  })
})
