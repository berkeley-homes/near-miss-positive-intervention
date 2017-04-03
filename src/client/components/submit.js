import React from 'react'

export default ({ enabled, submit }) =>
  <img
    className='center db'
    src={enabled
      ? '/assets/send_icon_btn_enabled.svg'
      : '/assets/send_icon_btn_disabled.svg'}
    onClick={enabled && submit}
   />
