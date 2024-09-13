/**
 * 通过 Object.prototype.toString 获取值的类型
 * @param v
 * @returns 类型
 * @example toString(null) // => '[object Null]'
 */
export const toString = (v: any): string => Object.prototype.toString.call(v)

/**
 * 获取值的类型
 * @param v
 * @returns 类型
 * @example getTypeName(null) // => 'null'
 */
export function getTypeName(v: any): string {
  if (v === null)
    return 'null'
  const type = toString(v).slice(8, -1).toLowerCase()
  return (typeof v === 'object' || typeof v === 'function') ? type : typeof v
}

/**
 * 空函数，什么也不做
 */
export function noop(): void {}
