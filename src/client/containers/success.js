import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import immutable from 'immutable'

import BerkeleyLogo from '../components/berkeley_logo.js'
import ThanksMessage from '../components/thanks_message.js'
import SuccessIllustration from '../components/success_illustration.js'
import HomeBtn from '../components/home_button.js'
import Header from '../components/header.js'

export const Success = ({ payload, reportType }) => (
  <div className='f_lato'>
    <Header location={'SUCCESS'} />
    <BerkeleyLogo />
    {!payload ? (
      <div>
        <ThanksMessage reportType={reportType} />
        <SuccessIllustration />
      </div>
    ) : (
      <div>
        <p>
          Hey there! Something's gone wrong. Please try again by clicking the
          link below. If you continue to have problems, please get in touch.
        </p>
      </div>
    )}
    <Link to='/'>
      <HomeBtn />
    </Link>
  </div>
)

export default connect(state => ({
  payload: immutable.fromJS(state.report.get('payload')),
  reportType: immutable.fromJS(state.report.get('reportType'))
}))(Success)
