import React from 'react'

const GifGridItem = ({id, title, url}) => {
  return (
    <li className="gif-cards__card">
      <img src={url} alt={title} />
    </li>
  )
}

export default GifGridItem
