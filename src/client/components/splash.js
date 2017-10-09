import React from 'react'

import { Link } from 'react-router-dom'

export default () =>
  <div className='pa4 vh-100'>
    <Link to='/site'>
      <div className='h-100 w-100 flex flex-column justify-around'>
        <img
          className='h-90 center db'
          src='/img/NearMiss_splash_onboarding_logo.svg'
        />
        <img
          className='h3 center db'
          src='/img/Berkeley-Group-logo.png'
        />
      </div>
    </Link>
  </div>
