import { describe, expect, it } from 'vitest'
import { isBrowser, isNode, isWindow } from '../../src/is/platform'

describe('is 平台判断函数测试', () => {
  it('isWindow 函数应正确判断 window 对象', () => {
    expect(isWindow({})).toBe(false)
  })

  it('isBrowser 函数应正确判断浏览器环境', () => {
    expect(isBrowser()).toBe(false)
  })

  it('isNode 函数应正确判断 Node 环境', () => {
    expect(isNode()).toBe(true)
  })
})
