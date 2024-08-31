/**
 * nanoid 中导出 {@link https://github.com/ai/nanoid}
 */
const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

/**
 * 生成随机字符串
 * @param size
 * @param dict
 * @returns 随机字符串
 * @example randomStr() // => 'nZZyknCBT5ra_gGE'
 */
export function randomStr(size = 16, dict = urlAlphabet): string {
  let id = ''
  let i = size
  const len = dict.length
  while (i--)
    id += dict[(Math.random() * len) | 0]
  return id
}

/**
 * 将字符串中的 \ 转换为 /
 * @param str
 */
export function slash(str: string): string {
  return str.replace(/\\/g, '/')
}

/**
 * 确保字符串以 prefix 开头
 * @param prefix
 * @param str
 * @example ensurePrefix('http://', 'www.baidu.com') // => 'http://www.baidu.com'
 */
export function ensurePrefix(prefix: string, str: string): string {
  if (!str.startsWith(prefix))
    return prefix + str
  return str
}

/**
 * 确保字符串以 suffix 结尾
 * @param suffix
 * @param str
 * @example ensureSuffix('.html', 'file') // => 'file.html'
 */
export function ensureSuffix(suffix: string, str: string): string {
  if (!str.endsWith(suffix))
    return str + suffix
  return str
}

/**
 * 去除字符串两边空格
 * @param str
 */
export function trim(str: string): string {
  return str.trim()
}

/**
 * 去除字符串左边空格
 * @param str
 */
export function trimLeft(str: string): string {
  return str.trimStart()
}

/**
 * 去除字符串右边空格
 * @param str
 */
export function trimRight(str: string): string {
  return str.trimEnd()
}

/**
 * 去除字符串中所有空格
 * @param str
 */
export function trimAll(str: string): string {
  return str.replace(/\s+/g, '')
}
