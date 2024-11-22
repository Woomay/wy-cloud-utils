declare namespace wyUtils {
  /**
   * 生成数字范围内的随机数
   * @param min 最小数字
   * @param max 最大数字
   */
  export function random(min: number, max: number): number
}

declare module 'wy-cloud-utils' {
  export = wyUtils
}