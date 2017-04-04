import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

import PositiveBtn from '../components/positive_btn.js'
import NearMissBtn from '../components/nearMiss_btn.js'

const ModeMonitor = () =>
  <div>
    <Link to='uploadphoto'>
      <PositiveBtn />
      <NearMissBtn />
    </Link>
  </div>

export default ModeMonitor
