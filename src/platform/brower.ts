import { isBrowser, ua } from './base'

/**
 * 判断是否为 Chrome 浏览器
 * @returns 是否为 Chrome
 */
export const isChrome: boolean = isBrowser && /Chrome/i.test(ua)

/**
 * 判断是否为 Firefox 浏览器
 * @returns 是否为 Firefox 浏览器
 */
export const isFirefox: boolean = isBrowser && /Firefox/i.test(ua)

/**
 * 判断是否为 Safari 浏览器
 * @returns 是否为 Safari 浏览器
 */
export const isSafari: boolean = isBrowser && /Safari/i.test(ua) && !isChrome

/**
 * 判断是否为 Edge 浏览器
 * @returns 是否为 Edge 浏览器
 */
export const isEdge: boolean = isBrowser && /Edge/i.test(ua)

/**
 * 判断是否为 IE 浏览器
 * @returns 是否为 IE 浏览器
 */
export const isIE: boolean = isBrowser && /Trident/i.test(ua)

/**
 * 判断是否为 Opera 浏览器
 * @returns 是否为 Opera 浏览器
 */
export const isOpera: boolean = isBrowser && /Opera/i.test(ua)

/**
 * 判断是否为 QQ 浏览器
 * @returns 是否为 QQ 浏览器
 */
export const isQQ: boolean = isBrowser && /QQ/i.test(ua)

/**
 * 判断是否为微信浏览器
 * @returns 是否为微信浏览器
 */
export const isWeChat: boolean = isBrowser && /MicroMessenger/i.test(ua)

/**
 * 判断是否为企业微信浏览器
 * @returns 是否为企业微信浏览器
 */
export const isWeWork: boolean = isBrowser && /wxwork/i.test(ua)

/**
 * 判断是否为微信小程序 webview 环境内
 *
 * 建议在WeixinJSBridgeReady回调中使用，也可以使用 {@link https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html|JSSDK} 提供的 getEnv 接口。
 * @see {@link https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html}
 * @returns 是否为微信小程序 webview 环境内
 */
export const isWeApplet: boolean = isBrowser && (window as any)?.__wxjs_environment === 'miniprogram'

/**
 * 判断是否为百度浏览器
 * @returns 是否为百度浏览器
 */
export const isBaidu: boolean = isBrowser && /Baidu/i.test(ua)

/**
 * 判断是否为钉钉浏览器
 * @returns 是否为钉钉浏览器
 */
export const isDingTalk: boolean = isBrowser && /DingTalk/i.test(ua)

/**
 * 判断是否为支付宝浏览器
 * @returns 是否为支付宝浏览器
 */
export const isAliPay: boolean = isBrowser && /AliPay/i.test(ua)

/**
 * 判断是否为淘宝浏览器
 * @returns 是否为淘宝浏览器
 */
export const isTaobao: boolean = isBrowser && /Taobao/i.test(ua)

/**
 * 判断是否为 360 浏览器
 * @returns 是否为 360 浏览器
 */
export const is360: boolean = isBrowser && /360/.test(ua)

/**
 * 判断是否为搜狗浏览器
 * @returns 是否为搜狗浏览器
 */
export const isSogou: boolean = isBrowser && /Sogou/i.test(ua)
