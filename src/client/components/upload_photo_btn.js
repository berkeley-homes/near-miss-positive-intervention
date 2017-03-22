/* global FileReader */

import React, { Component } from 'react'

class UploadPhotoButton extends Component {
  constructor (props) {
    super(props)

    this.onImageSelect = this.onImageSelect.bind(this)
  }

  onImageSelect (event) {
    const reader = new FileReader()
    const input = event.target
    const file = input.files[0]

    // const preview = document.createElement('IMG')

    reader.addEventListener('load', () => {
      console.log(file)
      // this.props.setPhoto(reader.result)
      // preview.src=reader.result
    }, false)

    if (file) {
      reader.readAsDataURL(file)
    }
  }
  render () {
    return (
      <input
        onChange={this.onImageSelect}
        type='file'
        accept='image/*;capture=camera'
      />
    )
  }
}

export default UploadPhotoButton
