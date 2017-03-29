import React from 'react'
import { Link } from 'react-router-dom'

import positiveBtn from '../components/positive_btn.js'
import nearMissBtn from '../components/nearMiss_btn.js'

export const modeMonetor = ({ title, setPhoto, photoData }) =>
  <div>
    <positiveBtn />
    <nearMiss_btn />
  </div>
