import { isBrowser, ua } from './base'

/**
 * 判断是否为移动端
 * @returns 是否为移动端
 */
export const isMobile: boolean = isBrowser && /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)

/**
 * 判断是否为平板
 * @returns 是否为平板
 */
export const isPad: boolean = isBrowser && /iPad/i.test(ua)

/**
 * 判断是否为 PC
 * @returns 是否为 PC
 */
export const isPC: boolean = !isMobile && !isPad

/**
 * 判断是否为 iOS
 * @returns 是否为 iOS
 */
export const isIOS: boolean = isBrowser && /iPhone|iPad|iPod|iOS/i.test(ua)

/**
 * 判断是否为 Android
 * @returns 是否为 Android
 */
export const isAndroid: boolean = isBrowser && /Android/i.test(ua)

/**
 * 判断是否为 Windows 系统
 * @returns 是否为 Windows 系统
 */
export const isWindows: boolean = isBrowser && /Windows/i.test(ua)

/**
 * 判断是否为 Mac 系统
 * @returns 是否为 Mac 系统
 */
export const isMac: boolean = isBrowser && /Mac/i.test(ua)

/**
 * 判断是否为 Linux 系统
 * @returns 是否为 Linux 系统
 */
export const isLinux: boolean = isBrowser && /Linux/i.test(ua)
