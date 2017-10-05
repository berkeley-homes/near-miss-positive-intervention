import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/sites.js'

import Header from '../components/header.js'
import Site from '../components/site.js'

export const Sites = ({ setSite }) => {
  console.log(setSite)
  const listOfSites = [
    {
      name: 'goodmans-fields', imgURL: '/img/sites/goodmans.png'
    },
    {
      name: 'city-road', imgURL: '/img/sites/city-road.png'
    },
    {
      name: 'woodberry', imgURL: '/img/sites/woodberry.png'
    }
  ].map((site, i) => {
    return (
      <Site
        key={i}
        name={site.name}
        imgURL={site.imgURL}
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
