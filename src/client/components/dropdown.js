import React from 'react'

const DropDown = props => {
  const { select, options, value } = props

  return (
    <select
      value={value}
      onChange={e => { select(e.target.value) }}
    >
      {
      options.map((option, key) =>
        <option value={option.get('value')} key={key}>
          { option.get('text') }
        </option>
      )
    }
    </select>
  )
}

export default DropDown
