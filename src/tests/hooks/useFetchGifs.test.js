import useFetchGifs from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('test for hook/useFetchGif', () => {
  test('should return the initial state', async () => {
    const category = 'The office'
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    )
    const { data, loading } = result.current
    await waitForNextUpdate()

    expect(data).toEqual([])
    expect(loading).toBe(true)
  })

  test('should return an array of images and loading in false', async () => {
    const category = 'The office'
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    )
    await waitForNextUpdate()
    const { data, loading } = result.current

    expect(data.length).toBe(10)
    expect(loading).toBe(false)
  })
})
