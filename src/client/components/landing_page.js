import React from 'react'

import Logo from '../components/logo.js'
import WelcomeMessage from '../components/welcome_message.js'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <Logo />
      <WelcomeMessage />
      <Link to='/report'> report </Link>
    </div>
  )
}

export default LandingPage
