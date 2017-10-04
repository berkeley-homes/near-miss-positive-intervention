import React from 'react'
import cx from 'classnames'

import {naturalCompare} from '../lib/utils.js'

const DropDown = props => {
  const { select, options, value, enabled } = props
  const disabled = !enabled

  const sortedOptions = options && options.sort(naturalCompare)

  return (
    <div className=' fl w-third pa3 pt1'>
      <select
        className={cx(
          'bg-white',
          'input_arrow',
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
        sortedOptions && sortedOptions.unshift('').map((option, key) =>
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
