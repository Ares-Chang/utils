import { describe, expect, it } from 'vitest'
import { sleep } from '../src/utils'

describe('sleep 函数测试', () => {
  it('应返回 Promise', () => {
    expect(sleep()).toBeInstanceOf(Promise)
  })
  it('应等待 1000 毫秒', async () => {
    const start = Date.now()
    await sleep(1000)
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(1000)
  })
})
