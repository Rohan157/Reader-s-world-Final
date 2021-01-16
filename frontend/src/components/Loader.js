import { blue } from 'colors'
import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner
      animation='grow'
      role='status'
      style={{
        width: '30px',
        height: '30px',
        margin: 'auto',
        display: 'block',
      
        background: 'black'
        
      }}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader