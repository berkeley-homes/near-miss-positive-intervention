import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import * as actions from '../actions/report_details'
import LocationSelector from '../components/location_selector.js'
import UploadPhotoButton from '../components/upload_photo.js'
import Submit from '../components/submit.js'
import Input from '../components/input.js'

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
