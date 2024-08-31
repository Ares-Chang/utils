import { getUA, isBrowser } from './base'

/**
 * 判断是否为 PC
 * @returns 是否为 PC
 */
export function isPC(): boolean {
  return !isMobile() && !isPad()
}

/**
 * 判断是否为移动端
 * @returns 是否为移动端
 */
export function isMobile(): boolean {
  return isBrowser() && /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(getUA())
}

/**
 * 判断是否为平板
 * @returns 是否为平板
 */
export function isPad(): boolean {
  return isBrowser() && /iPad/i.test(getUA())
}

/**
 * 判断是否为 iOS
 * @returns 是否为 iOS
 */
export function isIOS(): boolean {
  return isBrowser() && /iPhone|iPad|iPod|iOS/i.test(getUA())
}

/**
 * 判断是否为 Android
 * @returns 是否为 Android
 */
export function isAndroid(): boolean {
  return isBrowser() && /Android/i.test(getUA())
}

/**
 * 判断是否为 Windows 系统
 * @returns 是否为 Windows 系统
 */
export function isWindows(): boolean {
  return isBrowser() && /Windows/i.test(getUA())
}

/**
 * 判断是否为 Mac 系统
 * @returns 是否为 Mac 系统
 */
export function isMac(): boolean {
  return isBrowser() && /Mac/i.test(getUA())
}

/**
 * 判断是否为 Linux 系统
 * @returns 是否为 Linux 系统
 */
export function isLinux(): boolean {
  return isBrowser() && /Linux/i.test(getUA())
}
