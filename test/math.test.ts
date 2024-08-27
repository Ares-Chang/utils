import { describe, expect, it } from 'vitest'
import { random, randomInt, sum } from '../src/math'

describe('math', () => {
  describe('random 函数', () => {
    it('应该返回给定范围内的随机数', () => {
      const min = 5
      const max = 10
      const result = random(min, max)
      expect(result).toBeGreaterThanOrEqual(min)
      expect(result).toBeLessThan(max)
    })
  })

  describe('randomInt 函数', () => {
    it('应该返回给定范围内的随机整数', () => {
      const min = 5
      const max = 10
      const result = randomInt(min, max)
      expect(result).toBeGreaterThanOrEqual(min)
      expect(result).toBeLessThan(max)
      expect(Number.isInteger(result)).toBe(true)
    })
  })

  describe('sum 函数', () => {
    it('应该正确计算数字数组的总和', () => {
      expect(sum(1, 2, 3)).toEqual(6)
      expect(sum([1, 2, 3])).toEqual(6)
    })

    it('应该正确处理嵌套数组并计算总和', () => {
      expect(sum([1, 2], [3, 4])).toEqual(10)
      expect(sum([1], [2, 3], [4, 5])).toEqual(15)
    })
  })
})
