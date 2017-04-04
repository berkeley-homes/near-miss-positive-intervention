import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import * as actions from '../actions/report_details'
import LocationSelector from '../components/location_selector.js'
import UploadPhotoButton from '../components/upload_photo.js'
import Submit from '../components/submit.js'
import Input from '../components/input.js'

const optionsTree = Immutable.fromJS({
  NE: {
    '11': {
      B: {},
      M: {},
      G: {},
      L1: {},
      L2: {},
      L3: {},
      L4: {},
      L5: {},
      L6: {},
      L7: {},
      L8: {},
      L9: {},
      L10: {},
      L11: {},
      L12: {},
      L13: {},
      L14: {},
      L15: {},
      L16: {},
      L17: {},
      L18: {},
      L19: {},
      L20: {},
      Roof: {}
    },
    '12': {
      B: {},
      M: {},
      G: {},
      L1: {},
      L2: {},
      L3: {},
      L4: {},
      L5: {},
      L6: {},
      L7: {},
      L8: {},
      L9: {},
      L10: {},
      L11: {},
      L12: {},
      L13: {},
      L14: {},
      L15: {},
      L16: {},
      L17: {},
      L18: {},
      L19: {},
      L20: {},
      L21: {},
      L22: {},
      Roof: {}
    }
  },
  SE: {
    '5': {
      B: {},
      M: {},
      G: {},
      L1: {},
      L2: {},
      L3: {},
      L4: {},
      L5: {},
      L6: {},
      L7: {},
      L8: {},
      L9: {},
      L10: {},
      L11: {},
      L12: {},
      L13: {},
      L14: {},
      L15: {},
      L16: {},
      L17: {},
      L18: {},
      L19: {},
      L20: {},
      Roof: {}
    },
    '5A': {
      B: {},
      M: {},
      G: {},
      L1: {},
      L2: {},
      L3: {},
      L4: {},
      L5: {},
      L6: {},
      L7: {},
      L8: {},
      Roof: {}
    },
    '6': {
      B: {},
      M: {},
      G: {},
      L1: {},
      L2: {},
      L3: {},
      L4: {},
      L5: {},
      L6: {},
      Roof: {}
    },
    '7': {
      L9: {},
      L10: {},
      L11: {},
      L12: {},
      L13: {},
      L14: {},
      L15: {},
      L16: {},
      L17: {},
      L18: {},
      L19: {},
      L20: {},
      Roof: {}
    },
    '7A': {
      B: {},
      M: {},
      G: {},
      L1: {},
      L2: {},
      L3: {},
      L4: {},
      L5: {},
      L6: {},
      L7: {},
      L8: {},
      Roof: {}
    },
    '8': {
      B: {},
      M: {},
      G: {},
      L1: {},
      L2: {},
      L3: {},
      L4: {},
      L5: {},
      L6: {},
      L7: {},
      L8: {},
      L9: {},
      L10: {},
      L11: {},
      L12: {},
      L13: {},
      L14: {},
      L15: {},
      L16: {},
      L17: {},
      L18: {},
      L19: {},
      L20: {},
      L21: {},
      Roof: {}
    }
  }
})

export const ReportDetails = props => {
  const {
    name,
    description,
    setName,
    setDescription,
    locationSelectorProps,
    setPhoto,
    photoData,
    submitReport,
    isSubmitting
  } = props

  const allLocationSelectorProps = {
    optionsTree,
    ...locationSelectorProps
  }

  const canSend = locationSelectorProps.locationThree && description

  return (
    <div>
      <UploadPhotoButton
        setPhoto={setPhoto}
        photoData={photoData}
      />
      <Input
        value={name}
        onChange={setName}
        label='Name (Optional)'
      />
      <LocationSelector {...allLocationSelectorProps} />
      <Input
        value={description}
        onChange={setDescription}
        label='This is what I saw...'
      />
      <Submit
        enabled={canSend}
        submit={submitReport}
        isSubmitting={isSubmitting}
      />
    </div>
  )
}

export const mapStateToProps = state => {
  const reportState = state.report

  return {
    name: reportState.get('name'),
    description: reportState.get('description'),
    locationOne: reportState.getIn(['location', 0]),
    locationTwo: reportState.getIn(['location', 1]),
    locationThree: reportState.getIn(['location', 2]),
    photoData: reportState.get('photoData'),
    isSubmitting: reportState.get('isPosting')
  }
}

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
