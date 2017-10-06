import React from 'react'

const Site = ({ name, path, handleSetSite, imgURL }) => {
  return (
    <div className='flex flex-column' onClick={() => { handleSetSite(path) }}>
      <img className='mw5 pa2 center' src={imgURL} alt={name} />
    </div>
  )
}

export default Site
