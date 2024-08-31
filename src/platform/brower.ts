import { getUA, isBrowser } from './base'

/**
 * 判断是否为 Chrome 浏览器
 * @returns 是否为 Chrome
 */
export function isChrome(): boolean {
  return isBrowser() && /Chrome/i.test(getUA())
}

/**
 * 判断是否为 Firefox 浏览器
 * @returns 是否为 Firefox 浏览器
 */
export function isFirefox(): boolean {
  return isBrowser() && /Firefox/i.test(getUA())
}

/**
 * 判断是否为 Safari 浏览器
 * @returns 是否为 Safari 浏览器
 */
export function isSafari(): boolean {
  return isBrowser() && /Safari/i.test(getUA()) && !isChrome()
}

/**
 * 判断是否为 Edge 浏览器
 * @returns 是否为 Edge 浏览器
 */
export function isEdge(): boolean {
  return isBrowser() && /Edge/i.test(getUA())
}

/**
 * 判断是否为 IE 浏览器
 * @returns 是否为 IE 浏览器
 */
export function isIE(): boolean {
  return isBrowser() && /Trident/i.test(getUA())
}

/**
 * 判断是否为 Opera 浏览器
 * @returns 是否为 Opera 浏览器
 */
export function isOpera(): boolean {
  return isBrowser() && /Opera/i.test(getUA())
}

/**
 * 判断是否为 QQ 浏览器
 * @returns 是否为 QQ 浏览器
 */
export function isQQ(): boolean {
  return isBrowser() && /QQ/i.test(getUA())
}

/**
 * 判断是否为微信浏览器
 * @returns 是否为微信浏览器
 */
export function isWeChat(): boolean {
  return isBrowser() && /MicroMessenger/i.test(getUA())
}

/**
 * 判断是否为企业微信浏览器
 * @returns 是否为企业微信浏览器
 */
export function isWeWork(): boolean {
  return isBrowser() && /wxwork/i.test(getUA())
}

/**
 * 判断是否为微信小程序 webview 环境内
 *
 * 建议在WeixinJSBridgeReady回调中使用，也可以使用 {@link https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html|JSSDK} 提供的 getEnv 接口。
 * @see {@link https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html}
 * @returns 是否为微信小程序 webview 环境内
 */
export function isWeApplet(): boolean {
  return isBrowser() && (window as any)?.__wxjs_environment === 'miniprogram'
}

/**
 * 判断是否为百度浏览器
 * @returns 是否为百度浏览器
 */
export function isBaidu(): boolean {
  return isBrowser() && /Baidu/i.test(getUA())
}

/**
 * 判断是否为钉钉浏览器
 * @returns 是否为钉钉浏览器
 */
export function isDingTalk(): boolean {
  return isBrowser() && /DingTalk/i.test(getUA())
}

/**
 * 判断是否为支付宝浏览器
 * @returns 是否为支付宝浏览器
 */
export function isAliPay(): boolean {
  return isBrowser() && /AliPay/i.test(getUA())
}

/**
 * 判断是否为淘宝浏览器
 * @returns 是否为淘宝浏览器
 */
export function isTaobao(): boolean {
  return isBrowser() && /Taobao/i.test(getUA())
}

/**
 * 判断是否为 360 浏览器
 * @returns 是否为 360 浏览器
 */
export function is360(): boolean {
  return isBrowser() && /360/.test(getUA())
}

/**
 * 判断是否为搜狗浏览器
 * @returns 是否为搜狗浏览器
 */
export function isSogou(): boolean {
  return isBrowser() && /Sogou/i.test(getUA())
}
