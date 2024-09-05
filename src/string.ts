/**
 * 将字符串中的 \ 转换为 /
 *
 * @param str
 */
export function slash(str: string): string {
  return str.replace(/\\/g, '/')
}

/**
 * 确保字符串以 prefix 开头
 *
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
 *
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
 *
 * @param str
 */
export function trim(str: string): string {
  return str.trim()
}

/**
 * 去除字符串左边空格
 *
 * @param str
 */
export function trimLeft(str: string): string {
  return str.trimStart()
}

/**
 * 去除字符串右边空格
 *
 * @param str
 */
export function trimRight(str: string): string {
  return str.trimEnd()
}

/**
 * 去除字符串中所有空格
 *
 * @param str
 */
export function trimAll(str: string): string {
  return str.replace(/\s+/g, '')
}

/**
 * 全部小写(lowerCase)
 *
 * @param str
 * @example lowerCase('UPPERCASE') // => 'uppercase'
 */
export function lowerCase(str: string): string {
  return str.toLowerCase()
}

/**
 * 全部大写(upperCase)
 *
 * @param str
 * @example upperCase('upperCase') // => 'UPPERCASE'
 */
export function upperCase(str: string): string {
  return str.toUpperCase()
}

/**
 * 首字母大写(capitalize)
 *
 * @param str
 * @example capitalize('capitalize') // => 'Capitalize'
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * 短横线(kebabCase)
 *
 * @param str
 * @example kebabCase('kebabCase') // => 'kebab-case'
 */
export function kebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase()
}

/**
 * 标题大小写(titleCase)
 *
 * @param str
 * @example titleCase('titleCase') // => 'Title Case'
 */
export function titleCase(str: string): string {
  return kebabCase(str).split('-').map(capitalize).join(' ')
}

/**
 * 下划线(snakeCase)
 *
 * @param str
 * @example snakeCase('snakeCase') // => 'snake_case'
 */
export function snakeCase(str: string): string {
  return kebabCase(str).replace(/-/g, '_')
}

/**
 * 小驼峰(lowerCamelCase)
 *
 * @param str
 * @example lowerCamelCase('LOWER_CAMEL_CASE') // => 'lowerCamelCase'
 */
export function lowerCamelCase(str: string): string {
  return kebabCase(str).replace(/-./g, x => x[1].toUpperCase())
}

/**
 * 大驼峰(upperCamelCase)
 *
 * @param str
 * @example upperCamelCase('upper_camel_case') // =>  'UpperCamelCase'
 */
export function upperCamelCase(str: string): string {
  const val = lowerCamelCase(str)
  return val.charAt(0).toUpperCase() + val.slice(1)
}

/**
 * 转换为驼峰命名, 默认小驼峰
 *
 * @param str
 * @example camelCase('CAMEL_CASE') // => 'camelCase'
 */
export function camelCase(str: 'lowerCamelCase' | 'upperCamelCase' = 'lowerCamelCase'): string {
  return str === 'lowerCamelCase' ? lowerCamelCase(str) : upperCamelCase(str)
}
