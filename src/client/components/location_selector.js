import React from 'react'

import Dropdown from './dropdown.js'

const keys = map => map && map.keySeq().toList()

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

  return (
    <div>
      <Dropdown
        value={locationOne}
        options={keys(optionsTree)}
        select={setFirstLocation}
      />
      {locationOne &&
        <Dropdown
          value={locationTwo}
          options={keys(optionsTree.get(locationOne))}
          select={setSecondLocation}
        />
      }
      {locationOne && locationTwo &&
        <Dropdown
          value={locationThree}
          options={keys(optionsTree.getIn([locationOne, locationTwo]))}
          select={setThirdLocation}
        />
      }
    </div>
  )
}
