import React from 'react'

const Site = ({ name, handleSetSite }) => {
  return (
    <div onClick={() => { handleSetSite(name) }}>
      <p>{name} </p>
    </div>
  )
}

export default Site
