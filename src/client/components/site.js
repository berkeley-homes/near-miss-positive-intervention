import React from 'react'

const Site = ({ name, path, handleSetSite, imgURL }) => {
  return (
    <div className='' onClick={() => { handleSetSite(path) }}>
      <img className='mw5 pa2 center' src={imgURL} alt={name} />
    </div>
  )
}

export default Site
