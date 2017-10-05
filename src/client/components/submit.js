import React from 'react'
import Loading from './upload_animation.js'

export default ({ enabled, submit, isSubmitting }) =>
  isSubmitting ? (
    <Loading />
  ) : (
    <img
      className='center db pointer'
      src={
        enabled
          ? '/assets/send_icon_btn_enabled.svg'
          : '/assets/send_icon_btn_disabled.svg'
      }
      onClick={enabled && submit}
    />
  )
