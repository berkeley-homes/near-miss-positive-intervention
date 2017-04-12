import React from 'react'
import cx from 'classnames'

import Dropdown from './dropdown.js'

const keys = map => map && map.keySeq().toList()

export const Label = ({ text, enabled }) =>
  <div
    className={
      cx(
        'fl',
        'w-third',
        'h2',
        'ph3',
        'relative', {
          'black-30': !enabled,
          'black-60': enabled
        }
      )
    }>
    <span className='absolute w-third bottom-0'>{ text }</span>
  </div>

export default props => {
  const {
    optionsTree,
    locationOne,
    setFirstLocation,
    locationTwo,
    setSecondLocation,
    locationThree,
    setThirdLocation
  } = props

  const otherSelected = locationOne === 'Other'

  const secondEnabled = !otherSelected && locationOne
  const thirdEnabled = !otherSelected && locationOne && locationTwo

  return (
    <div>
      <div className='fl w-100 h2 relative'>
        <Label text={'Location Block'} enabled />
        <Label text={'Core'} enabled={secondEnabled} />
        <Label text={'Level'} enabled={thirdEnabled} />
      </div>
      <Dropdown
        value={locationOne}
        enabled
        options={keys(optionsTree)}
        select={setFirstLocation}
        label='Location Block'
      />
      <Dropdown
        value={locationTwo}
        enabled={secondEnabled}
        options={keys(optionsTree.get(locationOne))}
        select={setSecondLocation}
        label='Core'
      />
      <Dropdown
        value={locationThree}
        enabled={thirdEnabled}
        options={keys(optionsTree.getIn([locationOne, locationTwo]))}
        select={setThirdLocation}
        label='Level'
      />
    </div>
  )
}
