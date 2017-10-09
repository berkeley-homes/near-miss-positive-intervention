import React, { Component } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import * as actions from '../actions/report_details'
import LocationSelector from '../components/location_selector.js'
import UploadPhotoButton from '../components/upload_photo.js'
import Submit from '../components/submit.js'
import Input from '../components/input.js'
import Header from '../components/header.js'

import * as siteData from '../lib/siteData.js'

export class ReportDetails extends Component {
  componentWillMount () {
    if (!this.props.reportType || !this.props.site) {
      this.props.redirectUser()
    }
  }

  render () {
    const {
      name,
      description,
      setName,
      setDescription,
      locationSelectorProps,
      setPhoto,
      photoData,
      submitReport,
      isSubmitting,
      site,
      reportType
    } = this.props

    // If site and report type don't exist we return null and redirect to site page. view ComponentWillMount func.
    if (!site || !reportType) {
      return (
        <div />
      )
    }

    const currentSite = siteData[Object.keys(siteData).filter((key) => siteData[key].path === site)]

    const optionsTree = Immutable.fromJS(currentSite.location)

    const allLocationSelectorProps = {
      optionsTree,
      ...locationSelectorProps
    }

    const canSend =
      description &&
      (locationSelectorProps.locationThree ||
        locationSelectorProps.locationOne === 'Other')
    return (
      <div className='w-100 center f_lato mb3'>
        <Header location={'UPLOAD'} />
        <UploadPhotoButton setPhoto={setPhoto} photoData={photoData} />
        <Input value={name} onChange={setName} label='Name (Optional)' />
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
    isSubmitting: reportState.get('isPosting'),
    site: reportState.get('site'),
    reportType: reportState.get('reportType')
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
