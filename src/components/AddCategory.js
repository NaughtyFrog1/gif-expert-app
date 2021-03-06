import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimInput = inputValue.trim()

    if (trimInput.length < 2) return

    setCategories((categories) => [trimInput, ...categories])
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add category"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
