import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/sites.js'

import Header from '../components/header.js'
import Site from '../components/site.js'

export const Sites = ({ setSite }) => {
  console.log(setSite)
  const listOfSites = ['Goodmans Field', 'Blah', 'Blah2'].map((site, i) => {
    return (
      <Site
        name={site}
        handleSetSite={setSite}
      />
    )
  })
  return (
    <div className='vh-100 w-100 f_lato f4 flex flex-column'>
      <Header location={'SITE'} />
      <div className='flex flex-column h-100'>
        {listOfSites}
      </div>
    </div>
  )
}

export default connect(() => ({}), actions)(Sites)
