import React from 'react'

const DropDown = props => {
  const { select, options, value } = props

  return (
    <select
      value={value}
      onChange={e => { select(e.target.value) }}
    >
      {
      options.unshift('').map((option, key) =>
        <option value={option} key={key}>
          { option }
        </option>
      )
    }
    </select>
  )
}

export default DropDown
