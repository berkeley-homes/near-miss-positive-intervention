import React from 'react'

import { Link } from 'react-router-dom'

export default () =>
  <div>
    <Link to='/thumbs'>
      <img
        className='w-80 center db pa4 pt5 mt4'
        src='/img/NearMiss_splash_onboarding_logo.svg'
      />
      <img
        className='w-70 center db'
        src='/img/Berkeley-Group-logo.png'
      />
    </Link>
  </div>
