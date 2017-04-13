/* global FileReader */

import React, { Component } from 'react'

class UploadPhotoButton extends Component {
  constructor (props) {
    super(props)

    this.onImageSelect = this.onImageSelect.bind(this)
  }

  onImageSelect (event) {
    const { setPhoto } = this.props
    const reader = new FileReader()
    const input = event.target
    const file = input.files[0]

    reader.addEventListener('load', () => {
      setPhoto(reader.result)
    }, false)

    if (file) {
      reader.readAsDataURL(file)
    }
  }
  render () {
    const { photoData } = this.props

    return (
      <div className='mt2'>
        <input
          className='upload_icon contain db center'
          onChange={this.onImageSelect}
          type='file'
          accept='image/*;capture=camera'
        />
        <span className='center db tc f6'> Upload from device </span>
        {photoData &&
          <div className='center pa2 db w-90 bg-light-green'> Image Uploaded </div>
        }
      </div>
    )
  }
}

export default UploadPhotoButton
