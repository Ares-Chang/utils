import { flattenArrayable } from './array'

/**
 * 获取指定范围随机数
 * @param min 最小值
 * @param max 最大值
 * @returns 指定范围内随机数
 */
export function random(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

/**
 * 获取指定范围随机整数
 * @param min 最小值
 * @param max 最大值
 * @returns 指定范围内随机整数
 */
export function randomInt(min: number, max: number): number {
  return Math.round(random(min, max))
}

/**
 * 求和
 * @param args
 * @returns 计算总合
 * @example sum(1, 2, 3) // => 6
 */
export function sum(...args: number[] | number[][]): number {
  return flattenArrayable(args).reduce((a, b) => a + b, 0)
}
