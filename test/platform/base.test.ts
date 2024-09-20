import { afterEach, describe, expect, it, vi } from 'vitest'

import { getUA, isBrowser, isNode } from '../../src/platform/base'

// @TODO: 不会测了，都改为了属性导出强依赖初次加载时的值，不会 mock 了。
describe.todo('环境判断和获取 UA 的函数测试', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('isBrowser Function', async () => {
    expect(isBrowser).toBe(false)

    // vi.stubGlobal('window', {
    //   document: {},
    // })
    vi.doMock('../../src/platform/base', async () => {
      const arg = await vi.importActual('../../src/platform/base')

      return { ...arg, isBrowser: true }
    })
    expect(isBrowser).toBe(true)
  })

  it('isNode Function', () => {
    expect(isNode).toBe(true)

    vi.stubGlobal('process', undefined)
    expect(isNode).toBe(false)
  })

  it('getUA Function', () => {
    expect(getUA()).toBe('')

    vi.stubGlobal('window', { document: {}, navigator: { userAgent: 'testBrowserUA' } })
    expect(getUA()).toBe('testBrowserUA')
  })
})
