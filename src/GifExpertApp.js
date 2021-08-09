import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'One Punch',
    'Samurai X',
    'Dragon Ball',
  ])

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  )
}

export default GifExpertApp

/**
 * Cada elemento en una lista debe tener una "key" prop única.
 * Se recomienda que esta "key" no sea el índice del elemento, ya que si se modifica el array pueden producirse errores
 */
