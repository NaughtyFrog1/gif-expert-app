import React from 'react'

const GifGridItem = ({id, title, url}) => {
  return (
    <li className="gif-cards__card animate__animated animate__fadeInUp">
      <img src={url} alt={title} />
    </li>
  )
} 

export default GifGridItem
