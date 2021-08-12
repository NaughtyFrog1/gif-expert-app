import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory'
import GifGrid  from './components/GifGrid'

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories)

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

GifExpertApp.propTypes = {
  defaultCategories: PropTypes.array,
}

export default GifExpertApp

/**
 * Cada elemento en una lista debe tener una "key" prop única.
 * Se recomienda que esta "key" no sea el índice del elemento, ya que si se modifica el array pueden producirse errores
 */
