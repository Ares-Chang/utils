/**
 * nanoid 中导出 {@link https://github.com/ai/nanoid}
 */
const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

/**
 * 生成简易 {@link https://github.com/ai/nanoid|nanoid}，使用 nanoid 中导出的字母表
 *
 * @param size
 * @param dict
 * @returns id
 * @example nid() // => 'nZZyknCBT5ra_gGE'
 */
export function nid(size = 16, dict = urlAlphabet): string {
  let id = ''
  let i = size
  const len = dict.length
  while (i--)
    id += dict[(Math.random() * len) | 0]
  return id
}
