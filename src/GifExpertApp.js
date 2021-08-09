import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import GifGrid  from './components/GifGrid'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['The Office'])

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <section>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </section>
    </>
  )
}

export default GifExpertApp

/**
 * Cada elemento en una lista debe tener una "key" prop única.
 * Se recomienda que esta "key" no sea el índice del elemento, ya que si se modifica el array pueden producirse errores
 */
