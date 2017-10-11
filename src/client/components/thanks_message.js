import React from 'react'

const ThanksMessage = ({ reportType }) => {
  return (
    <div className='f_francois tc main_black_font f4'>
      <p className='ma0 lh-copy'>Thank you,</p>
      <p className='ma0 lh-copy'>
        your {reportType.replace('-', ' ')} has been recorded.
      </p>
    </div>
  )
}

export default ThanksMessage
