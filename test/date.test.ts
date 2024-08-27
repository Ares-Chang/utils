import { describe, expect, it } from 'vitest'
import { timestamp } from '../src/date'

describe('timestamp 函数测试', () => {
  it('应返回时间戳', () => {
    expect(timestamp()).toBeTypeOf('number')
  })
})
