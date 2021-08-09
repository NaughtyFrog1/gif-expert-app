import React from 'react'

const GifGridItem = ({id, title, url}) => {
  return (
    <li className="card">
      <img src={url} alt={title} />
    </li>
  )
}

export default GifGridItem
