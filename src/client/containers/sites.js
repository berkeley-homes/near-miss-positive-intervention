import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/sites.js'

import Header from '../components/header.js'
import Site from '../components/site.js'

import * as siteData from '../lib/siteData'

export const Sites = ({ setSite }) => {
  const listOfSites = Object.keys(siteData).map((site, i) => {
    return (
      <Site
        key={i}
        name={siteData[site].name}
        path={siteData[site].path}
        imgURL={siteData[site].imgURL}
        handleSetSite={setSite}
      />
    )
  })
  return (
    <div className='w-100 f_lato f4 flex flex-column'>
      <Header location={'SITE'} />
      <div className='flex flex-column h-100'>
        {listOfSites}
      </div>
    </div>
  )
}

export default connect(() => ({}), actions)(Sites)
