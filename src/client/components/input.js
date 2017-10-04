import React from 'react'

export default ({ label, value, onChange }) =>
  <div className='w-100 pa3'>
    <span className='black-60'>
      {label}
    </span>
    <input
      type='text'
      className='w-100 h3 ba bw1 mt2 b--nearmiss-black nearmiss_input_text'
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
