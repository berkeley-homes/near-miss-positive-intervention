import React from 'react'

const Loading = () => {
  return (
    <svg
      className='divi center db'
      viewBox='0 0 200 200'
      width='100%'
      height='100%'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      x='0px'
      y='0px'
    >
      <g>
        <circle
          className='outer'
          style={{stroke: 'rgb(51, 51, 51)'}}
          cx='100'
          cy='100'
          r='95'
        />
        <path
          className='outer'
          style={{stroke: 'rgb(51, 51, 51)'}}
          d='M100.2,6C47.8,6,5.4,48.5,5.4,100.8s42.5,94.8,94.8,94.8s94.8-42.5,94.8-94.8S152.5,6,100.2,6z M100.2,185.7 c-46.9,0-84.8-38-84.8-84.8S53.3,16,100.2,16S185,54,185,100.8S147,185.7,100.2,185.7z'
        />
      </g>
    </svg>
  )
}

export default Loading
