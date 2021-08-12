import React from 'react'
import PropTypes from 'prop-types'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category)

  return (
    <div className="category">
      <h3>{category}</h3>

      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <ol className="gif-cards">
        {gifs.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </ol>
    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}

export default GifGrid
