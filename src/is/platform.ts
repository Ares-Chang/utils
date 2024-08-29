import { is } from './types'

// @ts-expect-error 检测 window
export const isWindow = (val: any): boolean => typeof window !== 'undefined' && is(val, 'Window')
// @ts-expect-error 检测 window
export const isBrowser = typeof window !== 'undefined'
