import { useEffect, useState } from 'react'
import getGifs from '../helpers/getGifs'

const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {
    getGifs(category).then((gifs) => {
      setTimeout(() => {
        setState({
          data: gifs,
          loading: false,
        })
      }, 2000);
    })
  }, [category])

  return state
}

export default useFetchGifs

/**
 * Los custom hooks funcionan como functional components, pero no retornan un JSX
 */
