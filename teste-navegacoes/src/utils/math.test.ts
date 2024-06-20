import { decrease, increase } from './math'

describe('Component Math Tests', () => {

  it('should decrease two numbers', () => {
    expect(decrease(30, 10)).toBe(20)
  })

  it('should increase two numbers', () => {
    expect(increase(75, 5)).toBe(80)
  })

})
