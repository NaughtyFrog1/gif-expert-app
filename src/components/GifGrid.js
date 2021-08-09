import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category)

  return (
    <div className="category">
      <h3>{category}</h3>

      {loading && <p>Loading</p>}

      <ol className="gif-cards">
        {gifs.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </ol>
    </div>
  )
}

export default GifGrid
