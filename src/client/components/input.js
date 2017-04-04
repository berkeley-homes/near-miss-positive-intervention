import React from 'react'

export default ({ label, value, onChange }) =>
  <div className='fl w-100 pa3'>
    <span className='black-60'>{ label }</span>
    <input
      className='fl w-100 h3 ba bw1 mt2'
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
