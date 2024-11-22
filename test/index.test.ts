import { random } from "../src";

describe('生成数字范围内的随机数', () => {
  it('random(1, 1) -> should return 1', () => {
    const rand = random(1, 1);
    expect(rand).toBe(1);
  })
  it('random(1, 10) -> should return number', () => {
    const rd = random(1, 10);
    expect(typeof rd).toBe('number');
  })
})