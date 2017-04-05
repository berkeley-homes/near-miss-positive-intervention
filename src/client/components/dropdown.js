import React from 'react'
import cx from 'classnames'

const DropDown = props => {
  const { select, options, value } = props
  const disabled = !options

  return (
    <div className=' fl w-third pa3 pt1'>
      <select
        className={cx(
          'bg-white',
          'input-reset',
          'w-100',
          'bw1',
          'h3',
          'ba', {
            'b--nearmiss-black': !disabled,
            'b--black-30': disabled
          })}
        value={value}
        onChange={e => { select(e.target.value) }}
        disabled={disabled}
      >
        {
        options && options.unshift('').map((option, key) =>
          <option value={option} key={key}>
            { option }
          </option>
        )
      }
      </select>
    </div>
  )
}

export default DropDown
