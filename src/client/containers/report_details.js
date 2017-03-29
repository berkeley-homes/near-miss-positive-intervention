import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import * as actions from '../actions/report_details'
import LocationSelector from '../components/location_selector.js'

const optionsTree = Immutable.fromJS({
  a: {
    b: {
      c: {},
      d: {},
      e: {}
    },
    f: {
      g: {},
      h: {},
      i: {}
    },
    j: {
      k: {},
      l: {},
      m: {}
    }
  },
  n: {
    o: {
      p: {},
      q: {},
      r: {}
    },
    s: {
      t: {}
    }
  }
})

export const ReportDetails = props => {
  const {
    name,
    description,
    setName,
    setDescription,
    locationSelectorProps
  } = props

  const allLocationSelectorProps = {
    optionsTree,
    ...locationSelectorProps
  }

  return (
    <div>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <LocationSelector {...allLocationSelectorProps} />
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
    </div>
  )
}

export const mapStateToProps = state => ({
  name: state.get('name'),
  description: state.get('description'),
  locationOne: state.getIn(['location', 0]),
  locationTwo: state.getIn(['location', 1]),
  locationThree: state.getIn(['location', 2])
})

export const mergeProps = (
  { locationOne, locationTwo, locationThree, ...stateProps },
  { setFirstLocation, setSecondLocation, setThirdLocation, ...actionProps }
) => ({
  ...stateProps,
  ...actionProps,
  locationSelectorProps: {
    locationOne,
    locationTwo,
    locationThree,
    setFirstLocation,
    setSecondLocation,
    setThirdLocation
  }
})

export default connect(mapStateToProps, actions, mergeProps)(ReportDetails)
