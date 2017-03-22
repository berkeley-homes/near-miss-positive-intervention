import React from 'react'
import { connect } from 'react-redux'

import UploadPhotoButton from '../components/upload_photo_btn.js'

export const UploadPhoto = ({ title }) =>
  <div>
    <UploadPhotoButton />
    <p>{title}</p>
  </div>

export const mapStateToProps = (state) => {
  return {
    title: state.getIn(['UploadPhoto', 'title'])
  }
}

export default connect(mapStateToProps)(UploadPhoto)
