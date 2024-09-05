import { describe, expect, it } from 'vitest'
import { nid } from '../src/id'

describe('string', () => {
  describe('nid Function', () => {
    it('应该生成随机字符串', () => {
      expect(nid()).toHaveLength(16)
    })
  })
})
