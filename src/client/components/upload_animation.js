import React from 'react'

const Loading = () => {
  return (
    <div>
      <svg
        className='divi'
        viewBox='0 0 100 100'
        width='100%'
        height='100%'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        >
        <g>
          <circle className='outer' cx='100' cy='100' r='95' />
          <path className='outer' d='M100.2,6C47.8,6,5.4,48.5,5.4,100.8s42.5,94.8,94.8,94.8s94.8-42.5,94.8-94.8S152.5,6,100.2,6z M100.2,185.7 		c-46.9,0-84.8-38-84.8-84.8S53.3,16,100.2,16S185,54,185,100.8S147,185.7,100.2,185.7z' />
          <path className='inner' d='M101.7,51.7H74.9c-1,0-1.7,0.8-1.7,1.7V148c0,1,0.8,1.7,1.7,1.7l27.3,0c27.1,0,44.7-22.1,44.6-49.2 		C146.8,73.4,130,51.7,101.7,51.7z M101.7,139.8l-19.7,0V61.7l19.7,0.1c21.5,0,34.6,17.5,34.6,39S123.3,139.8,101.7,139.8z' />
        </g>
      </svg>
    </div>
  )
}

export default Loading
