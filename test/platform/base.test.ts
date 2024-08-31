import { afterEach, describe, expect, it, vi } from 'vitest'

import { getUA, isBrowser, isNode } from '../../src/platform/base'

describe('环境判断和获取 UA 的函数测试', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('isBrowser Function', () => {
    expect(isBrowser()).toBe(false)

    vi.stubGlobal('window', {
      document: {},
    })
    expect(isBrowser()).toBe(true)
  })

  it('isNode Function', () => {
    expect(isNode()).toBe(true)

    vi.stubGlobal('process', undefined)
    expect(isNode()).toBe(false)
  })

  it('getUA Function', () => {
    expect(getUA()).toBe('')

    vi.stubGlobal('window', { document: {}, navigator: { userAgent: 'testBrowserUA' } })
    expect(getUA()).toBe('testBrowserUA')
  })
})
