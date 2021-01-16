import React from 'react'
import { Alert } from 'react-bootstrap'
import '../screens/CartScreen.css'

const Message = ({ variant, children }) => {
  return (
    <div className='me'>
  <Alert variant={variant}>{children}</Alert>
  </div>
  )
}

Message.defaultProps = {
  variant: 'info',
}

export default Message