import { parse } from './ContentString'

describe('about src/lib/ContentString.ts', () => {
  test('parse', () => {
    const contentMap = parse(
      'width=device-width, initial-scale=1.0, invalid-key=, =invalid-value'
    )
    expect(contentMap).toStrictEqual({
      width: 'device-width',
      'initial-scale': '1.0'
    })
  })
})
