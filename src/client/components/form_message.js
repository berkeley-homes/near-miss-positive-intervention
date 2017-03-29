import React, { Component } from 'react'

class FormMessage extends Component {
  render () {
    return (
      <div>
        <input type='text' name='message' placeholder='Enter your message here' />
      </div>
    )
  }
}

export default FormMessage
