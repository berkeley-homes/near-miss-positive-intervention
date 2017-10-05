import React from 'react'

const Site = ({ name, handleSetSite, imgURL }) => {
  return (
    <div className='flex flex-column' onClick={() => { handleSetSite(name) }}>
      <img className='mw5 pa2 center' src={imgURL} alt={name} />
    </div>
  )
}

export default Site
