import React from 'react'
import Logo from '../assets/images/logo.png'

const SuspenseComp = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src={Logo} alt='Logo' style={{ width: '12vh' }} />
    </div>
  )
}

export default SuspenseComp
