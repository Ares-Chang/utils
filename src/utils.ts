/**
 * 睡眠
 * @param ms 毫秒 - 默认值为 1000
 * @returns Promise
 */
export async function sleep(ms: number = 1000): Promise<void> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve()
      clearTimeout(timer)
    }, ms)
  })
}
