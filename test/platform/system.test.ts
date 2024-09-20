import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  isAndroid,
  isIOS,
  isLinux,
  isMac,
  isMobile,
  isPad,
  isPC,
  isWindows,
} from '../../src/platform/system'

// 模拟不同的 User Agent
function mockUserAgent(userAgent: string) {
  vi.stubGlobal('window', {
    document: {},
    navigator: {
      userAgent,
    },
  })
}

const Windows = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
const Mac = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
const Linux = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'

const ios = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/605.1.15'
const Pad = 'Mozilla/5.0 (iPad; CPU OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/605.1.15'
const Android = 'Mozilla/5.0 (Linux; Android 10; Pixel 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'

// 清除 mock
afterEach(() => {
  vi.unstubAllGlobals()
})

describe('设备和操作系统判断函数', () => {
  it('isMobile Function', () => {
    mockUserAgent(ios)
    expect(isMobile()).toBe(true)

    mockUserAgent(Windows)
    expect(isMobile()).toBe(false)
  })

  it('isPC Function', () => {
    mockUserAgent(Windows)
    expect(isPC()).toBe(true)

    mockUserAgent(ios)
    expect(isPC()).toBe(false)
  })

  it('isPad Function', () => {
    mockUserAgent(Windows)
    expect(isPad()).toBe(false)

    mockUserAgent(Pad)
    expect(isPad()).toBe(true)
  })

  it('isIOS Function', () => {
    mockUserAgent(ios)
    expect(isIOS()).toBe(true)

    mockUserAgent(Windows)
    expect(isIOS()).toBe(false)
  })

  it('isAndroid Function', () => {
    mockUserAgent(Android)
    expect(isAndroid()).toBe(true)

    mockUserAgent(Windows)
    expect(isAndroid()).toBe(false)
  })

  it('isWindows Function', () => {
    mockUserAgent(Windows)
    expect(isWindows()).toBe(true)

    mockUserAgent(Mac)
    expect(isWindows()).toBe(false)
  })

  it('isMac Function', () => {
    mockUserAgent(Mac)
    expect(isMac()).toBe(true)

    mockUserAgent(Windows)
    expect(isMac()).toBe(false)
  })

  it('isLinux Function', () => {
    mockUserAgent(Linux)
    expect(isLinux()).toBe(true)

    mockUserAgent(Windows)
    expect(isLinux()).toBe(false)
  })
})
