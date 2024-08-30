import { describe, expect, it } from 'vitest'
import {
  isCarNo,
  isCard,
  isEmail,
  isEmpty,
  isMobileNum,
} from '../../src/is/utils'

describe('is 工具函数测试', () => {
  it('isEmpty 函数应正确判断空值', () => {
    expect(isEmpty({})).toBe(true)
    expect(isEmpty(123)).toBe(false)
    expect(isEmpty([1, 2, 3])).toBe(false)
    expect(isEmpty('')).toBe(true)
    expect(isEmpty(null)).toBe(false)
  })

  it('isMobileNum 函数应正确判断手机号', () => {
    expect(isMobileNum(17666666666)).toBe(true)
    expect(isMobileNum('17666666666')).toBe(true)
    expect(isMobileNum(12666666666)).toBe(false)
    expect(isMobileNum(1266666666)).toBe(false)
  })

  it('isCarNo 函数应正确判断车牌号', () => {
    expect(isCarNo('123')).toBe(false)

    expect(isCarNo('京A12345')).toBe(true)
    expect(isCarNo('川A123AB')).toBe(true)

    expect(isCarNo('京A123456')).toBe(false)
    expect(isCarNo('京A2222i')).toBe(false)

    // 挂学警港澳
    expect(isCarNo('京A2222学')).toBe(true)
    expect(isCarNo('川AC001警')).toBe(true)
    expect(isCarNo('川AC001挂')).toBe(true)

    expect(isCarNo('川AC001京')).toBe(false)

    // 新能源
    expect(isCarNo('京DF12345')).toBe(true)
    expect(isCarNo('京DD12345')).toBe(true)
    expect(isCarNo('京DF1234D')).toBe(true)
    expect(isCarNo('京DF1234F')).toBe(true)
  })

  it('isCard 函数应正确判断身份证', () => {
    expect(isCard('110101199003070134')).toBe(true)

    expect(isCard('11010119900307013')).toBe(false)
    expect(isCard('1101011990030701345')).toBe(false)

    expect(isCard('11010119900307013X')).toBe(true)

    expect(isCard('999999999999999999')).toBe(false)
  })

  it('isEmail 函数应正确判断邮箱', () => {
    expect(isEmail('123@qq.com')).toBe(true)
    expect(isEmail('test@email.com')).toBe(true)
    expect(isEmail('mail@areschang.me')).toBe(true)
    expect(isEmail('123')).toBe(false)
    expect(isEmail('123@')).toBe(false)
  })
})
