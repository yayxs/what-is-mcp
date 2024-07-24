export const isClient = typeof window !== 'undefined'
export const isString = (val: unknown): val is string => typeof val === 'string'
/**
 * 含有window 对象的页面渲染的环境是否是鸿蒙
 * @description ArkWeb关键字识别是否是OpenHarmony设备以及web内核是否为ArkWeb
 * @see ArkWeb
 */

export function isOpenHarmony() {
  const nu: string = window.navigator.userAgent
  const NU: string = nu.toUpperCase()
  return NU.includes('ARKWEB')
}
