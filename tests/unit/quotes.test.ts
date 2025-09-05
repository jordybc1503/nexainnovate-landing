import { describe, it, expect } from 'vitest'
import { pageBounds } from '@/lib/services/quotes'

describe('quotes pagination helper', () => {
  it('caps negative and zero values', () => {
    expect(pageBounds(0, 0)).toEqual({ skip: 0, take: 1 })
    expect(pageBounds(-5, -10)).toEqual({ skip: 0, take: 1 })
  })
  it('computes skip and take correctly', () => {
    expect(pageBounds(3, 20)).toEqual({ skip: 40, take: 20 })
  })
  it('caps very large pageSize to 100', () => {
    expect(pageBounds(2, 1000)).toEqual({ skip: 100, take: 100 })
  })
})

