import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  is360,
  isAliPay,
  isBaidu,
  isChrome,
  isDingTalk,
  isEdge,
  isFirefox,
  isIE,
  isOpera,
  isQQ,
  isSafari,
  isSogou,
  isTaobao,
  isWeApplet,
  isWeChat,
  isWeWork,
} from '../../src/platform/brower'

const userAgents = {
  chrome: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
  firefox: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0',
  safari: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15',
  edge: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136',
  wechat: 'User-Agent: Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; MI 4W Build/KTU84P) AppleWebKit/533.1 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.4 TBS/025469 Mobile Safari/533.1 MicroMessenger/6.2.5.53_r2565f18.621 NetType/WIFI Language/zh_CN',
  weWork: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Mobile/14F89 wxwork/2.2.0 MicroMessenger/6.3.2',
  qq: 'Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; MI 4W Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 MQQBrowser/6.0 Mobile Safari/537.36',
  ie: 'Mozilla/5.0 (Windows NT The given key was not present in the dictionary.; WOW64; Trident/7.0; rv:11.0) like Gecko',
  opera: 'Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.18',
  dingTalk: 'Mozilla/5.0 (Linux; U; Android 8.1.0; zh-CN; COL-AL10 Build/HUAWEICOL-AL10) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/40.0.2214.89 UCBrowser/11.6.4.950 UWS/2.11.0.47 Mobile Safari/537.36 AliApp(DingTalk/4.3.7) com.alibaba.android.rimet/0 Channel/227200 language/zh-CN',
  sogou: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_8_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 MQQBrowser/12.0.0 Mobile/15E148 Safari/604.1 SogouMSE/12.0.0 QBWebViewUA/2 QBWebViewType/1 WKType/1',
  taobao: 'Mozilla/5.0 (Linux; U; Android 4.4.4; zh-cn; MI 2C Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36 AliApp(TB/4.9.2) WindVane/5.2.2 TBANDROID/700342@taobao_android_4.9.2 720X1280',
  360: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; QIHU 360EE)',
  aliPay: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AlipayClient/2.x NetType/WIFI',
  baidu: 'Mozilla/5.0 (Linux; Android 7.1.1; OPPO R9sk Build/NMF26F; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.3529.50 Mobile Safari/537.36 T7/9.1 baidubrowser/7.19.13.0 (Baidu; P1 7.1.1)',
}
// 模拟不同的 User Agent
function mockUserAgent(type: keyof typeof userAgents) {
  vi.stubGlobal('window', {
    document: {},
    navigator: {
      userAgent: userAgents[type],
    },
  })
}

// 清除 mock
afterEach(() => {
  vi.unstubAllGlobals()
})

describe('设备和操作系统判断函数', () => {
  it('isChrome Function', () => {
    mockUserAgent('chrome')
    expect(isChrome()).toBe(true)

    mockUserAgent('firefox')
    expect(isChrome()).toBe(false)
  })

  it('isFirefox Function', () => {
    mockUserAgent('firefox')
    expect(isFirefox()).toBe(true)

    mockUserAgent('chrome')
    expect(isFirefox()).toBe(false)
  })

  it('isSafari Function', () => {
    mockUserAgent('safari')
    expect(isSafari()).toBe(true)

    mockUserAgent('chrome')
    expect(isSafari()).toBe(false)
  })

  it('isIE Function', () => {
    mockUserAgent('ie')
    expect(isIE()).toBe(true)

    mockUserAgent('edge')
    expect(isIE()).toBe(false)
  })

  it('isEdge Function', () => {
    mockUserAgent('edge')
    expect(isEdge()).toBe(true)

    mockUserAgent('chrome')
    expect(isEdge()).toBe(false)
  })

  it('isOpera Function', () => {
    mockUserAgent('opera')
    expect(isOpera()).toBe(true)
  })

  it('isWeChat Function', () => {
    mockUserAgent('wechat')
    expect(isWeChat()).toBe(true)
  })

  it('isWeWork Function', () => {
    mockUserAgent('weWork')
    expect(isWeWork()).toBe(true)
  })

  it('isWeApplet Function', () => {
    vi.stubGlobal('window', {
      document: {},
      __wxjs_environment: 'miniprogram',
    })
    expect(isWeApplet()).toBe(true)
  })

  it('isQQ Function', () => {
    mockUserAgent('qq')
    expect(isQQ()).toBe(true)
  })

  it('isDingTalk Function', () => {
    mockUserAgent('dingTalk')
    expect(isDingTalk()).toBe(true)
  })

  it('isAliPay Function', () => {
    mockUserAgent('aliPay')
    expect(isAliPay()).toBe(true)
  })

  it('isTaobao Function', () => {
    mockUserAgent('taobao')
    expect(isTaobao()).toBe(true)
  })

  it('isBaidu Function', () => {
    mockUserAgent('baidu')
    expect(isBaidu()).toBe(true)
  })

  it('isSogou Function', () => {
    mockUserAgent('sogou')
    expect(isSogou()).toBe(true)
  })

  it('is360 Function', () => {
    mockUserAgent(360)
    expect(is360()).toBe(true)
  })
})
