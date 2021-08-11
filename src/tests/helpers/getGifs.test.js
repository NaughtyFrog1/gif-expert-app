import getGifs from '../../helpers/getGifs'

describe('tests for helpers/getGifs.js', () => {
  test('should bring 10 items', async () => {
    const gifs = await getGifs('The Office')
    await expect(gifs.length).toBe(10)
  })

  test("shouldn't bring any item", async () => {
    const gifs = await getGifs('')
    await expect(gifs.length).toBe(0)
  })
})
