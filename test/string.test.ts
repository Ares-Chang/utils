import { describe, expect, it } from 'vitest'
import {
  camelCase,
  capitalize,
  desensitization,
  ensurePrefix,
  ensureSuffix,
  kebabCase,
  lowerCamelCase,
  lowerCase,
  slash,
  snakeCase,
  titleCase,
  trim,
  trimAll,
  trimLeft,
  trimRight,
  upperCamelCase,
  upperCase,
} from '../src/string'

describe('string', () => {
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

  describe('字符转换', () => {
    it('全部小写(lowerCase)', () => {
      expect(lowerCase('HELLO')).toBe('hello')
      expect(lowerCase('HELLO-b')).toBe('hello-b')
      expect(lowerCase('Hello c')).toBe('hello c')
    })

    it('全部大写(upperCase)', () => {
      expect(upperCase('hello')).toBe('HELLO')
      expect(upperCase('hello-b')).toBe('HELLO-B')
      expect(upperCase('Hello c')).toBe('HELLO C')
    })

    it('首字母大写(capitalize)', () => {
      expect(capitalize('hello')).toBe('Hello')
      expect(capitalize('hello-b')).toBe('Hello-b')
      expect(capitalize('Hello c')).toBe('Hello c')
    })

    it('标题大小写(titleCase)', () => {
      expect(titleCase('hello')).toBe('Hello')
      expect(titleCase('hello-b')).toBe('Hello B')
      expect(titleCase('Hello c')).toBe('Hello C')
      expect(titleCase('HelloD')).toBe('Hello D')
    })

    it('短横线(kebabCase)', () => {
      expect(kebabCase('HELLO')).toBe('hello')
      expect(kebabCase('hello-b')).toBe('hello-b')
      expect(kebabCase('Hello c')).toBe('hello-c')
      expect(kebabCase('HelloD')).toBe('hello-d')
      expect(kebabCase('Hello_E')).toBe('hello-e')
    })

    it('下划线(snakeCase)', () => {
      expect(snakeCase('HELLO')).toBe('hello')
      expect(snakeCase('hello-b')).toBe('hello_b')
      expect(snakeCase('hello C')).toBe('hello_c')
      expect(snakeCase('HelloD')).toBe('hello_d')
    })

    it('小驼峰(lowerCamelCase)', () => {
      expect(lowerCamelCase('HELLO')).toBe('hello')
      expect(lowerCamelCase('hello-b')).toBe('helloB')
      expect(lowerCamelCase('hello C')).toBe('helloC')
      expect(lowerCamelCase('HelloD')).toBe('helloD')
      expect(lowerCamelCase('Hello_e')).toBe('helloE')
    })

    it('大驼峰(upperCamelCase)', () => {
      expect(upperCamelCase('HELLO')).toBe('Hello')
      expect(upperCamelCase('hello-b')).toBe('HelloB')
      expect(upperCamelCase('hello C')).toBe('HelloC')
      expect(upperCamelCase('HelloD')).toBe('HelloD')
      expect(upperCamelCase('Hello_e')).toBe('HelloE')
    })

    it('驼峰(camelCase)', () => {
      expect(camelCase('a_b_c')).toBe('aBC')
      expect(camelCase('lowerCamelCase', 'lowerCamelCase')).toBe('lowerCamelCase')
      expect(camelCase('upperCamelCase', 'upperCamelCase')).toBe('UpperCamelCase')
    })
  })

  describe('信息脱敏', () => {
    it('默认参数', () => {
      expect(desensitization('1234567890')).toBe('123***7890')
      expect(desensitization('110101199003070134')).toBe('110***********0134')
      // 位数不够不处理
      expect(desensitization('1234')).toBe('1234')
    })

    it('自定义参数', () => {
      expect(desensitization('1234567890', '-')).toBe('123---7890')
      expect(desensitization('110101199003070134', 6, 2)).toBe('110101**********34')
      expect(desensitization('110101199003070134', 6, 2, '-')).toBe('110101----------34')
    })
  })
})
