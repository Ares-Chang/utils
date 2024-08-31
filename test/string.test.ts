import { describe, expect, it } from 'vitest'
import {
  ensurePrefix,
  ensureSuffix,
  randomStr,
  slash,
  trim,
  trimAll,
  trimLeft,
  trimRight,
} from '../src/string'

describe('string', () => {
  describe('randomStr Function', () => {
    it('应该生成随机字符串', () => {
      expect(randomStr()).toHaveLength(16)
    })
  })

  describe('slash Function', () => {
    it('应该将字符串中的 \ 转换为 /', () => {
      expect(slash('hello\\world')).toBe('hello/world')
    })
  })

  describe('ensurePrefix Function', () => {
    it('应该确保字符串以 prefix 开头', () => {
      expect(ensurePrefix('http://', 'www.baidu.com')).toBe('http://www.baidu.com')
    })
  })

  describe('ensureSuffix Function', () => {
    it('应该确保字符串以 suffix 结尾', () => {
      expect(ensureSuffix('.html', 'file')).toBe('file.html')
    })
  })

  describe('trim 函数', () => {
    it('应该去除字符串两边空格', () => {
      expect(trim('  hello  ')).toBe('hello')
    })
  })

  describe('trimAll 函数', () => {
    it('应该去除字符串中所有空格', () => {
      expect(trimAll('  h e llo  ')).toBe('hello')
    })
  })

  describe('trimLeft 函数', () => {
    it('应该去除字符串左边空格', () => {
      expect(trimLeft('  hello  ')).toBe('hello  ')
    })
  })

  describe('trimRight 函数', () => {
    it('应该去除字符串右边空格', () => {
      expect(trimRight('  hello  ')).toBe('  hello')
    })
  })
})
