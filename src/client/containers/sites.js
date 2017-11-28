import React from 'react'
import { connect } from 'react-redux'
import immutable from 'immutable'

import Header from '../components/header.js'
import Site from '../components/site.js'

import * as actions from '../actions/sites.js'
import * as siteData from '../lib/siteData'

export const Sites = ({ currentSite, setSite, resetSite }) => {
  const handleSetSite = !currentSite ? setSite : resetSite

  const listOfSites = Object.keys(siteData).map((site, i) => (
    <Site
      key={i}
      name={siteData[site].name}
      path={siteData[site].path}
      imgURL={siteData[site].imgURL}
      handleSetSite={handleSetSite}
    />
  ))

  return (
    <div className='w-100 f_lato f4 flex flex-column'>
      <Header location={'SITE'} />
      <div className='flex flex-column h-100 items-center'>{listOfSites}</div>
    </div>
  )
}

export default connect(
  state => ({ currentSite: immutable.fromJS(state.report.get('site')) }),
  actions
)(Sites)
