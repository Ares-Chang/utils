/**
 * 通过 Object.prototype.toString 获取值的类型
 * @param v
 * @returns 类型
 */
export const toString = (v: any): string => Object.prototype.toString.call(v)

/**
 * 获取值的类型
 * @param v
 * @returns 类型
 */
export function getTypeName(v: any): string {
  if (v === null)
    return 'null'
  const type = toString(v).slice(8, -1).toLowerCase()
  return (typeof v === 'object' || typeof v === 'function') ? type : typeof v
}
