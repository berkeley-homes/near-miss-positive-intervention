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
      <div>
        <input
          onChange={this.onImageSelect}
          type='file'
          accept='image/*;capture=camera'
        />
        {photoData && <img src={photoData} />}
      </div>
    )
  }
}

export default UploadPhotoButton
