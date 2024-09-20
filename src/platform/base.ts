/**
 * 判断是否为浏览器环境
 *
 * @returns 是否为浏览器环境
 */
export const isBrowser: boolean = typeof window !== 'undefined' && typeof window.document !== 'undefined'

/**
 * 判断是否为 Node 环境
 * @returns 是否为 Node 环境
 */
// eslint-disable-next-line node/prefer-global/process
export const isNode: boolean = typeof process !== 'undefined' && process.versions !== undefined && process.versions.node !== undefined

/**
 * 浏览器的 UA
 */
export const ua: string = isBrowser ? window.navigator?.userAgent : ''

/**
 * 获取浏览器的 UA
 * @returns 浏览器的 UA
 */
export function getUA(): string {
  return ua
}
