import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/upload_photo.js'

import UploadPhotoButton from '../components/upload_photo_btn.js'

export const UploadPhoto = ({ title, setPhoto, photoData }) =>
  <div>
    <UploadPhotoButton
      setPhoto={setPhoto}
      photoData={photoData}
    />
    <p>{title}</p>
  </div>

export const mapStateToProps = (state) => {
  const uploadPhotoState = state.get('uploadPhoto')
  return {
    title: uploadPhotoState.get('title'),
    photoData: uploadPhotoState.get('photoData')
  }
}

export default connect(mapStateToProps, actions)(UploadPhoto)
