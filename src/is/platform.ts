import { is } from './types'

/**
 * 判断是否为 window
 *
 * @param val
 * @returns 是否为 window
 */
export function isWindow(val: any): boolean {
  return typeof window !== 'undefined' && is(val, 'Window')
}

/**
 * 判断是否为浏览器环境
 *
 * @returns 是否为浏览器环境
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof window.document !== 'undefined'
}

/**
 * 判断是否为 Node 环境
 * @returns 是否为 Node 环境
 */
export function isNode(): boolean {
  // eslint-disable-next-line node/prefer-global/process
  return typeof process !== 'undefined' && process.versions !== undefined && process.versions.node !== undefined
}
